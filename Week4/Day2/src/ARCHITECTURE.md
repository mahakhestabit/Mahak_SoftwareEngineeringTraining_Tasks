# Task 1 Report: Production Backend Architecture

## 1. Executive Summary
This document outlines the completion of **Task 1: System Architecture & Initialization**. The objective was to transition from a basic Node.js setup to a scalable, production-grade **"Layered Architecture"**.

The system now supports **Multi-Environment Configuration**, **Strict Separation of Concerns**, and **Observability** (Structured Logging).

## 2. System Architecture
We have implemented a **3-Layer Architecture** to decouple business logic from the HTTP layer and the Database layer.

### Folder Structure & Responsibilities
* **`src/loaders/`**: Handles startup infrastructure. Initializes the Database and Express app independently.
* **`src/config/`**: Centralizes environment variables. It prevents hardcoded secrets and manages environment switching.
* **`src/utils/`**: Contains shared tools, specifically the **Custom Logger** (Winston).
* **`src/app.js`**: The clean entry point that delegates logic to the loaders.

## 3. Key Implementations

### A. Multi-Environment Configuration Strategy
To satisfy the "Config Loader" requirement, the system supports three distinct environments. The application detects `NODE_ENV` and loads the corresponding secret file automatically:

| Environment | File | Purpose |
| :--- | :--- | :--- |
| **Development** | `.env.dev` | Standard shared development settings (Port 3000). |
| **Production** | `.env.prod` | Simulates production settings (Port 8000). |
| **Local** | `.env.local` | Personal developer overrides (Not committed to Git). |

### B. The Loader Pattern
Instead of a monolithic `app.js`, startup logic is modular:
* **`src/loaders/db.js`**: Manages MongoDB connection reliability.
* **`src/loaders/app.js`**: Orchestrates loading order (DB $\rightarrow$ Middlewares $\rightarrow$ Routes).

### C. Observability (Structured Logging)
Standard `console.log` is replaced by **Winston**:
* **Console:** Pretty-printed, colorized logs for developer experience.
* **File System:** JSON-structured logs saved to `src/logs/app.log` for auditability.

## 4. Verification & Testing
The system has been verified against the deliverables checklist:

### Startup Output
Upon running `npm run dev` (or `prod`/`local`), the system outputs the required health checks:
* ✔ Database connected successfully
* ✔ Middlewares loaded
* ✔ Routes mounted
* ✔ Server started on port 3000 (or 8000 for prod)

## 5. Deliverables Checklist
* **[x] `/src/loaders/app.js`**: Created orchestrator loader.
* **[x] `/src/loaders/db.js`**: Created database connector.
* **[x] `/src/utils/logger.js`**: Created Winston logger.
* **[x] Config Loader**: Implemented support for `.env.dev`, `.env.prod`, and `.env.local`.