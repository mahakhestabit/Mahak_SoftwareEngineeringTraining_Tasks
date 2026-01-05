// src/models/product.model.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  tags: [String],
  

  createdAt: { type: Date, default: Date.now },
  
  // Soft Delete field (Required for your task)
  deletedAt: { type: Date, default: null } 
});

// Create and export the model
const Product = mongoose.model('Product', productSchema);
module.exports = Product;