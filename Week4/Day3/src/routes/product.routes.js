const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

// 1. GET /products - Handles search, filtering, sorting, pagination
router.get('/', productController.getProducts);

// 2. DELETE /products/:id - Handles soft delete
router.delete('/:id', productController.deleteProduct);

module.exports = router;