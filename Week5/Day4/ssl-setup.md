# Day 4: SSL + Self-Signed + mkcert + HTTPS

## 1. Project Setup & Prerequisites
Commands used to prepare the environment and install necessary tools on Linux.

| Command | Description / Use |
| :--- | :--- |
| `sudo apt install libnss3-tools` | Installs the NSS tools required for Chrome/Linux to trust local certificates. |
| `mkdir day4 && cd day4` | Creates and enters the project directory. |
| `mkdir certs nginx-conf` | Creates sub-directories to organize certificates and config files. |

## 2. Installing mkcert
Commands to download and set up the certificate generation tool.

```bash
# Download the binary
curl -JLO "[https://dl.filippo.io/mkcert/latest?for=linux/amd64](https://dl.filippo.io/mkcert/latest?for=linux/amd64)"

# Make it executable
chmod +x mkcert-v*-linux-amd64

# Move to system bin (so you can run it from anywhere)
sudo mv mkcert-v*-linux-amd64 /usr/local/bin/mkcert

# Verify installation
mkcert -version

# create files .pem and key.pem
mkcert localhost

# remove conatiners, network, images and volumes
docker compose down

# check existing containers
docker compose ps

# run docker command -d detach conatiner will start running in backgraound and we can use terminal otherwise different logs will come on terminal
docker compose up -d 
