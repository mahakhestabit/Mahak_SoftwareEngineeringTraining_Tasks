#!/bin/bash

# Stop any running containers
echo "Stopping old containers..."
docker compose down

# Start containers AND REBUILD them
# The --build flag forces Docker to read your updated index.js
echo "Starting and Rebuilding containers..."
docker compose up -d --build

# Stream the logs to a file in the background (append instead of overwrite)
docker compose logs -f >> project_logs.txt &

echo "Success! App is updated and running."
echo "Logs are being saved to 'project_logs.txt'"
