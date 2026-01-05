const Order = require('../models/Order');

class OrderRepository {
  async create(data) {
    return await Order.create(data);
  }

  async findByAccountId(accountId) {
    return await Order.find({ accountId }).populate('accountId', 'firstName email');
  }
}

module.exports = new OrderRepository();