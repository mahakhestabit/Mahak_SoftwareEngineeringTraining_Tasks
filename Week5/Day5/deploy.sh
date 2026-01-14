#!/bin/bash

if [ ! -f ./nginx/certs/localhost.pem ]; then
    mkdir -p ./nginx/certs
    mkcert -cert-file ./nginx/certs/localhost.pem -key-file ./nginx/certs/localhost-key.pem localhost
fi



echo "Starting production deployment..."

docker compose -f docker-compose.prod.yml down
docker compose -f docker-compose.prod.yml up --build -d

echo "Stack is running!"

echo "Deployment complete! Visit https://localhost"