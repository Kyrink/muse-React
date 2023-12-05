import mysql.connector
import json

with open("connectorConfig.json", "r") as f:
    config = json.load(f)
connection_config = config["mysql"]
db = mysql.connector.connect(**connection_config)
cursor = db.cursor(dictionary=True)


def onDeleteUserTrigger():
    # first ASF
    # creates a trigger that automatically deletes a user's reviews when the user account is deleted
    cursor.execute("DROP TRIGGER IF EXISTS `delete_user_reviews`")
    cursor.execute("""CREATE TRIGGER delete_user_reviews
                    BEFORE DELETE ON user
                    FOR EACH ROW
                    BEGIN
	                    DELETE FROM review WHERE user_id = OLD.user_id;
                    END;""")
    

def getTopReviewers():
    # second ASF
    # joins user and review; prints the user ids, display names, and number of reviews
    # of the top ten users with the highest number of reviews
    # documentation includes an explanation of the evaluation plan for this query
    cursor.execute("""SELECT user.user_id, user.displayName, COUNT(review.review_id) FROM user
                    INNER JOIN review ON review.user_id = user.user_id
                    WHERE review.user_id = user.user_id
                    GROUP BY user_id
                    ORDER BY COUNT(review.review_id) DESC LIMIT 10;""")

    
def updateReviewRating(id: int, rating: float):
    # third ASF
    # creates a transaction that updates the rating on a review; if the given value violates
    # the integrity of the database (rating below 0 or above 5), a rollback will occur
    # takes an integer review id and a floating point rating as parameters

    try:
        # Start the transaction
        cursor.execute("START TRANSACTION")

        # Perform the update operation within the transaction
        update_query = f"UPDATE review SET stars = {rating} WHERE review_id = {id}"
        cursor.execute(update_query)

        # Check the integrity constraint
        if rating < 0 or rating > 5:
            # Raise an error if the constraint is violated
            raise ValueError("Value for stars must be between 0 and 5.")

        # Commit the transaction if everything is successful
        cursor.execute("COMMIT")

    except Exception as e:
        # Rollback the transaction in case of an exception
        cursor.execute("ROLLBACK")
        print(f"Error: {e}")


onDeleteUserTrigger()
getTopReviewers()
updateReviewRating(18, 5.7)