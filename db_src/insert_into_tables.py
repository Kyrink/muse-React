import csv
import os
import mysql.connector
import json
import hashlib
import requests
from io import BytesIO


def process_password(password):
    # uses hashlib to salt password and return it
    salt = '9zh'
    saltPw = password + salt
    hashed = hashlib.md5(saltPw.encode())
    return hashed


def process_image(url):
    # takes in an image url and converts the referenced image to binary for storage in the database
    # worth noting some sites have anti-scraping measures that return 403: forbidden to requests.get(url)
    response = requests.get(url)
    if response.status_code == 200:
        imgBin = BytesIO(response.content).read()
    else:
        print("Failed to fetch image from URL \'" + url + "\'.\nError code: " + str(response.status_code))
        return None
    return imgBin


def read_location_csv(file_path, dic_tuples_locations):
    with open(file_path, newline='', encoding="utf-8") as csvfile:
        csv_reader = csv.reader(csvfile, delimiter=',', quotechar='"')
        print(file_path)
        index = 0
        next(csv_reader)
        for row in csv_reader:
            location_name = row[0]
            location_type = row[1]
            location_address = row[2]
            location_desc = row[3]
            if (row[4]):
                location_img = process_image(row[4])
            else:
                location_img = None
            dic_tuples_locations[index] = (location_name, location_type, location_address, location_desc, location_img)
            index += 1
    return dic_tuples_locations


def read_review_csv(file_path, dic_tuples_reviews):
    with open(file_path, newline='', encoding="utf-8") as csvfile:
        csv_reader = csv.reader(csvfile, delimiter=',', quotechar='"')
        print(file_path)
        index = 0
        next(csv_reader)
        for row in csv_reader:
            user_id = row[0]
            location_id = row[1]
            stars = float(row[2])
            if (stars > 5.0):
                stars = 5.0
            if (stars < 0.0):
                stars = 0.0
            comment = row[3]
            if (row[4]):
                review_img = process_image(row[4])
            else:
                review_img = None
            dic_tuples_reviews[index] = (user_id, location_id, stars, comment, review_img)
            index += 1
    return dic_tuples_reviews


def read_user_csv(file_path, dic_tuples_users):
    with open(file_path, newline='', encoding="utf-8") as csvfile:
        csv_reader = csv.reader(csvfile, delimiter=',', quotechar='"')
        print(file_path)
        index = 0
        next(csv_reader)
        for row in csv_reader:
            password = str(process_password(row[0]))
            display_name = row[1]
            email = row[2]
            dic_tuples_users[index] = (password, display_name, email)
            index += 1
    return dic_tuples_users


def insert_table(location_dir, review_dir, user_dir, config_file, location_table, review_table, user_table):
    """
    This method takes in the config file path and list of table descriptions and creates tables
    @param lst_table_descriptions: list of table descriptions
    @param config_file:  File Path of the configFile for the database
    """
    with open(config_file, "r") as f:
        config = json.load(f)
    connection_config = config["mysql"]
    db = mysql.connector.connect(**connection_config)

    # preparing a cursor object
    cursor_object = db.cursor()
    dic_tuples_locations = {}
    dic_tuples_users = {}
    dic_tuples_reviews = {}

    for csv_file in os.listdir(location_dir):
        dic_tuples_locations = \
            read_location_csv(location_dir + csv_file, dic_tuples_locations)
        
    for csv_file in os.listdir(review_dir):
        dic_tuples_reviews = \
            read_review_csv(review_dir + csv_file, dic_tuples_reviews)
        
    for csv_file in os.listdir(user_dir):
        dic_tuples_users = \
            read_user_csv(user_dir + csv_file, dic_tuples_users)

    for entry in dic_tuples_locations:
        cursor_object.execute("INSERT INTO muse_db." + location_table + " (location_name, location_type, address, description, location_image)"
                              "values (%s, %s, %s, %s, %s)", (dic_tuples_locations[entry]))
        
    for entry in dic_tuples_reviews:
        cursor_object.execute("INSERT INTO muse_db." + review_table + " (user_id, location_id, stars, comment, review_image)"
                              "values (%s, %s, %s, %s, %s)", (dic_tuples_reviews[entry]))
        
    for entry in dic_tuples_users:
        cursor_object.execute("INSERT INTO muse_db." + user_table + " (password, displayName, email)"
                              "values (%s, %s, %s)", (dic_tuples_users[entry]))

    db.commit()
    cursor_object.close()

path_to_location_dir = "csv/location/"
path_to_review_dir = "csv/review/"
path_to_user_dir = "csv/user/"
insert_table(path_to_location_dir, path_to_review_dir, path_to_user_dir, "connectorConfig.json", "artlocation", "review", "user")