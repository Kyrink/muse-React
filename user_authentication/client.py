import socket

client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client.connect(("localhost", 5000))

messsage = client.recv(1024).decode()
client.send(input(messsage).encode())

messsage = client.recv(1024).decode()
client.send(input(messsage).encode())
print(client.recv(1024).decode())
