import csv
from faker import Faker
import random

fake = Faker()

with open('image_links.txt', 'r') as file:
    image_links = [line.strip() for line in file]

def generate_review():
    user_id = fake.random_int(min=1, max=50)
    location_id = fake.random_int(min=1, max=50)
    stars = round(random.uniform(1, 5), 1)
    comment = '\n'.join(fake.paragraphs(nb=random.randint(1, 3)))
    review_image = random.choice(image_links) if random.choice([True, False]) else ""
    upvote = fake.random_int(min=0, max=10)
    downvote = fake.random_int(min=0, max=10)

    return [user_id, location_id, stars, comment, review_image, upvote, downvote]

reviews_data = [generate_review() for _ in range(400)]

headers = ["user_id", "location_id", "stars", "comment", "review_image", "upvote", "downvote"]

with open('../will/csv/review/generated_reviews.csv', 'w', newline='') as csv_file:
    csv_writer = csv.writer(csv_file)
    csv_writer.writerow(headers)
    csv_writer.writerows(reviews_data)
