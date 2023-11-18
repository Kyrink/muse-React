import mysql.connector

dataBase = mysql.connector.connect(
   host="localhost", # todo: host ip
   user="root",
   passwd="rootpass"
)

# preparing a cursor object
cursorObject = dataBase.cursor()

# creating database
cursorObject.execute("CREATE DATABASE MUSE_DB")