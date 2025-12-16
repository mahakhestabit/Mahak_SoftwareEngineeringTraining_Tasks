# Capstone Store - E-commerce Product Listing

A responsive e-commerce product listing application built using vanilla JavaScript, HTML, and CSS. This project fetches real-time data from an API and allows users to search and sort products dynamically.

**Repository:** `week2-frontend`

## 🚀 Features

* **Dynamic Data Fetching:** Retrives product data from `https://dummyjson.com/products` using the Fetch API.
* **Search Functionality:** Real-time filtering of products by title.
* **Sorting:** Sort products by Price (Low to High / High to Low).
* **Responsive Design:** specific CSS Grid layout that adapts from mobile to desktop screens.
* **Multi-page Layout:** Includes a Landing page (`index.html`) and a Products page (`products.html`).

## 📸 Screenshots

### Home Page
![Home Page Screenshot](./home-screenshot.png)

### Product Listing with API Data
![Products Page Screenshot](./products-screenshot.png)

### Mobile View
![Mobile View Screenshot](./mobile-screenshot.png)

## 🛠️ Tech Stack

* **HTML5**: Semantic structure.
* **CSS3**: Flexbox, Grid, and responsive media queries.
* **JavaScript (ES6+)**: `async/await`, `fetch`, DOM manipulation, Array methods (`filter`, `sort`).

## 📂 Project Structure

```text
week2-frontend/
├── index.html       # Landing page
├── products.html    # Main product listing page
├── style.css        # Global styles
├── script.js        # Logic for fetching, searching, and sorting
└── README.md        # Project documentation