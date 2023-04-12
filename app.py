import socket

from project.app import app

# Get the hostname
hostname = socket.gethostname()

# Get the IP address of the machine
ip_address = socket.gethostbyname(hostname)


if __name__ == "__main__":
    app.run(host=ip_address, port=5000, debug=True)

