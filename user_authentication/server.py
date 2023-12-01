import mysql.connector
import hashlib
import socket
import threading

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(("localhost", 5000))

server.listen()


def handle_connection(c):
    config_file = "../db_src/connectorConfig.json"
    salt = '9hz'
    c.send("Username: ".encode())
    username = c.recv(1024).decode()
    c.send("Password: ".encode())
    password = c.recv(1024)
    salted_password = salt + password
    hashed_password = hashlib.sha256(salted_password.encode()).hexdigest()

    conn = mysql.connector.connect(*config_file)
    cur = conn.cursor()

    cur.execute("SELECT * FROM user WHERE displayName = ? AND password = ?", (username, hashed_password))

    if cur.fetchall():
        c.send("Login successful!".encode())
    else:
        c.send("Login failed!".encode())

while True:
    client, addr = server.accept()
    threading.Thread(target=handle_connection, args=(client,)).start()
