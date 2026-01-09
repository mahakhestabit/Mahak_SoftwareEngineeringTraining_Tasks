

## 1. Objective
To implement a high-availability architecture using Docker Compose, consisting of:
* A Round-Robin Load Balancer (Nginx).
* Replicated Node.js Backend Servers (2 Instances).
* A Persistent MongoDB Database.

## 2. Architecture Implemented
* **Load Balancer:** Nginx running on Host Port 80.
* **Application:** Node.js/Express with 2 Replicas (Internal Port 5000).
* **Database:** MongoDB (Host Port 27017) with Named Volume for persistence.

## 3. Implementation Steps

### A. Docker Compose (`docker-compose.yml`)
* Configured `server` service with `deploy: replicas: 2`.
* Mapped host ports `5001-5002` to container port `5000` for direct debugging.
* Defined `mongo-data` volume to persist `/data/db`.

### B. Code Updates (`index.js`)
* Added `os` module to capture `os.hostname()`.
* Updated the Root Route (`/`) to print the **Container ID** in the response. This was crucial to visually verify that the Load Balancer was switching between replicas.

### C. Nginx Configuration (`nginx.conf`)
* Set up an `upstream` block named `myapp`.
* Configured `proxy_pass` to forward traffic from Port 80 to the backend replicas.

## 4. Troubleshooting & Challenges

**Issue 1: Port 80 Occupied**
* **Error:** Nginx container kept restarting.
* **Cause:** Local Apache server was running on Ubuntu host.
* **Fix:** Ran `sudo service apache2 stop` to free up Port 80.

**Issue 2: "Host not found" in Nginx**
* **Error:** Nginx logs showed `host not found in upstream "server:5000"`.
* **Cause:** DNS resolution issue during startup.
* **Fix:** Performed a clean network restart using `docker compose down` followed by `docker compose up -d`.

**Issue 3: Browser Caching**
* **Observation:** Logs were not updating on page refresh.
* **Fix:** Used Hard Refresh (`Ctrl+Shift+R`) and `curl` commands to bypass browser cache and verify Round-Robin distribution.

## 5. Verification Results
1.  **Load Balancing:** Validated via browser that response text changes between `day3-server-1` and `day3-server-2`.
2.  **Persistence:** Created user data -> Ran `docker compose down` -> Restarted containers. Data persisted successfully.