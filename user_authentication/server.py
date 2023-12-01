import json

import mysql.connector
import hashlib
import socket
import threading

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(("localhost", 5000))

server.listen()


def handle_connection(c):
    config_file = "../db_src/connectorConfig.json"
    with open(config_file, "r") as f:
        config = json.load(f)
    connection_config = config["mysql"]
    c.send("Username: ".encode())
    username = c.recv(1024).decode()
    c.send("Password: ".encode())
    password = c.recv(1024) + b'9zh'
    password = hashlib.sha256(password).hexdigest()
    print(password)

    conn = mysql.connector.connect(**connection_config)
    cur = conn.cursor()

    cur.execute("SELECT * FROM user WHERE displayName = %s AND password = %s", (username, password))

    if cur.fetchall():
        c.send("Login successful!".encode())
    else:
        c.send("Login failed!".encode())

while True:
    client, addr = server.accept()
    threading.Thread(target=handle_connection, args=(client,)).start()
