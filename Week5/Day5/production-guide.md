# Day 5Capstone: Full-Stack Production Environment

This repository contains a production-ready, containerized 3-tier application. It implements **NoSQL persistence**, **SSL termination**, and **Automated Health Monitoring**.

---

## Project Architecture
```bash
.
├── backend/            # Node.js Express API 
│   ├── Dockerfile      
│   └── index.js        # Logic for /api/submit and /api/users
├── frontend/           # Static Client files
│   └── index.html      # Secure HTTPS data submission form
├── nginx/              # Reverse Proxy & SSL Termination
│   ├── certs/          # Managed SSL Certificates (mkcert)
│   └── default.conf    # Proxy routing rules
├── .env                # Secret management (Database credentials)
├── deploy.sh           # One-click deployment script
└── docker-compose.prod.yml # Production orchestration manifest

```
# Create certs directory if it doesn't exist
mkdir -p nginx/certs

# Generate certificates for localhost
mkcert -cert-file nginx/certs/localhost.pem -key-file nginx/certs/localhost-key.pem localhost

# Grant execution permissions
chmod +x deploy.sh

# Run the deployment
./deploy.sh

# View live status and health of all services
docker compose -f docker-compose.prod.yml ps

# Follow real-time backend logs (Useful for debugging /api/users)
docker compose -f docker-compose.prod.yml logs -f backend

# Verify NoSQL data persistence directly in the DB
docker compose -f docker-compose.prod.yml exec db mongosh -u admin -p password --eval "db.users.find()"

# Stop containers but keep data (Standard Maintenance)
docker compose -f docker-compose.prod.yml stop

# Remove containers and networks (Keeps Volumes safe)
docker compose -f docker-compose.prod.yml down

# build that container
docker compose -f docker-compose.prod.yml up -d --build