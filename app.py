import hashlib
from flask import Blueprint, request, g, Flask, jsonify
import mysql.connector

from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Hardcoded MySQL configuration
app.config['DB_HOST'] = 'localhost'
app.config['DB_USER'] = 'root'
app.config['DB_PASSWORD'] = 'rootpass'
app.config['DB_DATABASE'] = 'MUSE_DB'
app.config['SECRET_KEY'] = ''


# Connect to the database
def connect_db():
    return mysql.connector.connect(
        host=app.config['DB_HOST'],
        user=app.config['DB_USER'],
        password=app.config['DB_PASSWORD'],
        database=app.config['DB_DATABASE']
    )


auth = Blueprint('auth', __name__)


@app.before_request
def before_request():
    g.db = connect_db()


@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    email = data.get('email')
    password = data.get('password')

    cursor = g.db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
    user = cursor.fetchone()

    if user and check_password(user['password'], password):
        return jsonify({'message': 'Logged in successfully!', 'success': True})
    else:
        return jsonify({'message': 'Incorrect email or password. Please try again.', 'success': False})


@app.route('/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        email = data['email']
        username = data['username']
        plain_text_password = data['password']

        cursor = g.db.cursor(dictionary=True)

        # Check if the user already exists
        cursor.execute("SELECT * FROM user WHERE email = %s", (email,))
        if cursor.fetchone():
            return jsonify({'message': 'Email already in use'}), 409

        # Hash the password
        hashed_password = hash_password(plain_text_password)

        # Insert the new user into the database
        insert_query = "INSERT INTO user (username, password, email) VALUES (%s, %s, %s)"
        cursor.execute(insert_query, (username, hashed_password, email))
        g.db.commit()
        cursor.close()

        return jsonify({'message': 'User registered successfully'}), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500


def check_password(stored_hashed_password, password):
    salt = '9zh'
    salted_pass = password + salt
    hashed_input = hashlib.sha256(salted_pass.encode()).hexdigest()
    return hashed_input == stored_hashed_password


@app.route('/api/search', methods=['GET', 'POST'])
def get_location():
    try:
        data = request.get_json()
        search_query = data.get('searchQuery')

        cursor = g.db.cursor(dictionary=True)

        sql_query = """
            SELECT al.latitude, al.longitude
            FROM review r
            JOIN artLocation al ON r.location_id = al.location_id
            WHERE al.location_name = %s
            GROUP BY al.latitude, al.longitude;
            """
        cursor.execute(sql_query, search_query)
        database_result = cursor.fetchall()

        print(database_result)

        cursor.close()
        g.db.close()

        if database_result:
            return jsonify([{"latitude": database_result['latitude'], "longitude": database_result['longitude']}])
        else:
            return jsonify([{"error": "Location not found"}]), 404

    except Exception as e:
        return jsonify([{"error": str(e)}]), 500

    return jsonify([{"error": "Unexpected error occurred"}]), 500


@app.route('/connect_route', methods=['GET', 'POST'])
def order_locations_by_rating():
    try:
        data = request.get_json()
        search_query = data.get('searchQuery')

        cursor = g.db.cursor(dictionary=True)
        query = """SELECT al.location_type, ROUND(AVG(r.stars), 1) AS averageStars
                FROM review r
                JOIN artLocation al ON r.location_id = al.location_id
                GROUP BY al.location_type
                ORDER BY averageStars DESC;"""
        cursor.execute(query)
        database_result = cursor.fetchall()
        cursor.close()
        g.db.close()

        if database_result:
            return jsonify(database_result)
        else:
            return jsonify({"error": "Location not found"}), 404

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    return jsonify({"error": "Unexpected error occurred"}), 500


@app.route('/connect_route', methods=['GET', 'POST'])
def get_location_by_type():
    try:
        data = request.get_json()
        search_query = data.get('searchQuery')

        cursor = g.db.cursor(dictionary=True)
        query = """SELECT al.location_name, al.address, ROUND(AVG(r.stars), 1) AS averageStars
            FROM review r
            JOIN artLocation al ON r.location_id = al.location_id
            WHERE r.stars > 3 AND al.location_type = %s
            GROUP BY al.location_name, al.address"""
        cursor.execute(query, search_query)
        database_result = cursor.fetchall()
        cursor.close()
        g.db.close()

        if database_result:
            return jsonify(database_result)
        else:
            return jsonify({"error": "Location not found"}), 404

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    return jsonify({"error": "Unexpected error occurred"}), 500


@app.route('/connect_route', methods=['GET', 'POST'])
def get_review_with_rating_greater_than():
    try:
        data = request.get_json()
        search_query = data.get('searchQuery')

        cursor = g.db.cursor(dictionary=True)
        query = """SELECT r.comment
                    FROM review r
                    JOIN artLocation al ON r.location_id = al.location_id
                    WHERE r.stars > %s  
                    AND r.comment <> ('') ;"""
        cursor.execute(query, search_query)
        database_result = cursor.fetchall()
        cursor.close()
        g.db.close()

        if database_result:
            return jsonify(database_result)
        else:
            return jsonify({"error": "Location not found"}), 404

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    return jsonify({"error": "Unexpected error occurred"}), 500


@app.route('/submit_review', methods=['POST'])
def submit_review():
    try:
        data = request.get_json()
        # Extract the data from the request
        user_id = data['user_id']
        location_id = data['location_id']
        rating = data['rating']
        visit_date = data['visit_date']
        review_text = data['review_text']
        # Optional: Handle photo upload if included
        # photo = data.get('photo', None)

        # Code to insert data into the database
        insert_review_into_database(
            user_id, location_id, rating, visit_date, review_text, review_image=None)

        return jsonify({'message': 'Review submitted successfully'}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500


def insert_review_into_database(user_id, location_id, rating, visit_date, review_text, review_image=None):
    """
    Inserts a review into the database.

    :param user_id: ID of the user
    :param location_id: ID of the location
    :param rating: Rating given by the user
    :param visit_date: Date of the visit
    :param review_text: Text of the review
    :param review_image: Optional image for the review
    """

    # Connect to the database
    cursor = g.db.cursor(dictionary=True)

    try:
        # SQL query to insert review
        query = """
        INSERT INTO review (user_id, location_id, stars, comment, review_image) 
        VALUES (%s, %s, %s, %s, %s)
        """
        cursor.execute(query, (user_id, location_id,
                       rating, review_text, review_image))

        # Commit the transaction
        g.db.commit()
    except mysql.connector.Error as err:
        print("Error: ", err)
        # Handle the error as needed
    finally:
        cursor.close()
        g.db.close()


@app.route('/connect_route', methods=['GET', 'POST'])
def get_locations_with_avg_rating():
    try:
        data = request.get_json()
        search_query = data.get('searchQuery')

        cursor = g.db.cursor(dictionary=True)
        query = """SELECT al.location_name, al.location_type, al.location_image, ROUND(AVG(r.stars), 1) AS averageStars
                    FROM review r
                    JOIN artLocation al ON r.location_id = al.location_id
                    WHERE r.stars > %s
                      AND al.location_image IS NOT NULL
                    GROUP BY al.location_name, al.location_type, al.location_image;"""
        cursor.execute(query, search_query)
        database_result = cursor.fetchall()
        cursor.close()
        g.db.close()

        if database_result:
            return jsonify(database_result)
        else:
            return jsonify({"error": "Location not found"}), 404

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    return jsonify({"error": "Unexpected error occurred"}), 500


@app.route('/connect_route', methods=['GET', 'POST'])
def get_location_review_counts():
    try:
        data = request.get_json()
        search_query = data.get('searchQuery')

        cursor = g.db.cursor(dictionary=True)
        query = """SELECT al.location_name, COUNT(r.review_id) AS reviewCount
                    FROM artLocation al
                    LEFT JOIN review r ON al.location_id = r.location_id
                    GROUP BY al.location_name
                    ORDER BY reviewCount DESC;"""
        cursor.execute(query)
        database_result = cursor.fetchall()
        cursor.close()
        g.db.close()

        if database_result:
            return jsonify(database_result)
        else:
            return jsonify({"error": "Location not found"}), 404

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    return jsonify({"error": "Unexpected error occurred"}), 500


@app.route('/get_art_locations', methods=['GET'])
def get_art_locations():
    try:
        cursor = g.db.cursor(dictionary=True)

        # Replace with your actual SQL query to fetch the required data
        query = """
        SELECT location_name AS title, location_image AS imageUrl, description, AVG(r.stars) AS rating
        FROM artLocation al
        LEFT JOIN review r ON al.location_id = r.location_id
        GROUP BY al.location_id;
        """
        cursor.execute(query)
        art_locations = cursor.fetchall()
        cursor.close()

        return jsonify(art_locations), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/connect_route', methods=['GET', 'POST'])
def get_locations_by_address():
    try:
        data = request.get_json()
        search_query = data.get('searchQuery')

        cursor = g.db.cursor(dictionary=True)
        query = """SELECT address, location_name
                    FROM artLocation 
                    WHERE address LIKE %s;"""
        cursor.execute(query, ('%' + search_query + '%',))
        database_result = cursor.fetchall()
        cursor.close()
        g.db.close()

        if database_result:
            return jsonify(database_result)
        else:
            return jsonify({"error": "Location not found"}), 404

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    return jsonify({"error": "Unexpected error occurred"}), 500


@app.route('/connect_route', methods=['GET', 'POST'])
def get_display_name_count():
    try:
        data = request.get_json()
        search_query = data.get('searchQuery')

        cursor = g.db.cursor(dictionary=True)
        query = """SELECT COUNT(*) as displayNameCount
                    FROM user
                    WHERE displayName = %s;"""
        cursor.execute(query, (search_query,))
        database_result = cursor.fetchone()
        cursor.close()
        g.db.close()

        if database_result:
            return jsonify(database_result)
        else:
            return jsonify({"error": "User not found"}), 404

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    return jsonify({"error": "Unexpected error occurred"}), 500


@auth.route('/register', methods=['POST'])
def register_user():
    try:
        data = request.get_json()
        cursor = g.db.cursor(dictionary=True)

        hashed_password = hash_password(data['password'])

        insert_query = """INSERT INTO user (username, password, email, display_name)
                          VALUES (%s, %s, %s, %s);"""

        user_data = (data['username'], hashed_password,
                     data['email'], data['display_name'])

        cursor.execute(insert_query, user_data)
        g.db.commit()

        cursor.close()

        return jsonify({"message": "User registered successfully"})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


def hash_password(password):
    salt = '9zh'
    salted_pass = password + salt
    hashed_password = hashlib.sha256(salted_pass.encode()).hexdigest()
    return hashed_password


if __name__ == '__main__':
    app.run(debug=True)
