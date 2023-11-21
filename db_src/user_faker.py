import csv
from faker import Faker
import random

fake = Faker()


def generate_user():
    password = fake.user_name()
    display_name = fake.user_name()
    email = fake.email()
    return [password, display_name, email]


users_data = [generate_user() for _ in range(100
                                             )]

headers = ["password", "displayName", "email"]

with open('../will/csv/user/generated_users.csv', 'w', newline='') as csv_file:
    csv_writer = csv.writer(csv_file)
    csv_writer.writerow(headers)
    csv_writer.writerows(users_data)
