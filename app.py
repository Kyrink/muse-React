import hashlib
from flask import Blueprint, request, g, Flask, jsonify
import mysql.connector

from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Hardcoded MySQL configuration
app.config['DB_HOST'] = 'localhost'
app.config['DB_USER'] = 'root'
app.config['DB_PASSWORD'] = 'Kr4tos12.'
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

        user_data = (data['username'], hashed_password, data['email'], data['display_name'])

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
