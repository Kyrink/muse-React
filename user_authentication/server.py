import mysql.connector
import hashlib
import socket
import threading

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(("localhost", 3306))

server.listen()


def handle_connection(c):
    config_file = "../db_src/connectorConfig.json"

    c.send("Username: ".encode())
    username = c.recv(1024).decode()
    c.send("Password: ".encode())
    password = c.recv(1024)
    password = hashlib.md5(password).hexdigest()