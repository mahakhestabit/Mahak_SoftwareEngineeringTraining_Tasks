const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  // Reference to the Account (User)
  accountId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
    required: true,
    index: true // Indexing foreign keys is good practice
  },
  items: [{
    name: String,
    price: Number,
    quantity: { type: Number, default: 1 }
  }],
  totalAmount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'cancelled'],
    default: 'pending'
  }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);