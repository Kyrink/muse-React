import json
import mysql.connector
from better_profanity import profanity
'''
    This profanity filter API has dataset preloaded, we just have to check comments for profanity.
    Each time a comment is loaded, it will check it for profanity.
    x is string to be parsed
    @author Jere Perisic
'''

def profanity_filter(x):
    profanity.load_censor_words()
    profanity_is_true = profanity.contains_profanity(x)
    if profanity_is_true:
        return True


def connect_to_db(config_file):
    with open(config_file, "r") as f:
        config = json.load(f)
    connection_config = config["mysql"]
    return mysql.connector.connect(**connection_config)


def check_comments_and_filter_for_profanity(conn):
    removed_review = "Review removed due to profanity"
    cursor = conn.cursor()
    select_comment = "SELECT review_id, comment FROM review"
    cursor.execute(select_comment)
    rows = cursor.fetchall()

    for row in rows:
        review_id, comment = row
        filtered_comment = profanity_filter(comment)

        if filtered_comment:
            print(review_id)
            update_query = "UPDATE review SET comment = %s WHERE review_id = %s"
            cursor.execute(update_query, (removed_review, review_id))
            conn.commit()


def return_changed(conn):
    cursor = conn.cursor()
    select_comment = "SELECT review_id, comment FROM review WHERE review_id = 401"
    cursor.execute(select_comment)

    result = cursor.fetchone()

    if result:
        review_id, comment = result
        print(f"Review ID: {review_id}, Comment: {comment}")
    else:
        print("No review found with review_id 401")

    cursor.close()


if __name__ == '__main__':
    config_file = "../db_src/connectorConfig.json"
    db_connection = connect_to_db(config_file)
    check_comments_and_filter_for_profanity(db_connection)
    return_changed(db_connection)
    db_connection.close()


