const Account = require('../models/Account');

class AccountRepository {

  async create(data) {
    return await Account.create(data);
  }

  async findById(id) {
    return await Account.findById(id);
  }

  async findPaginated(page = 1, limit = 10, filter = {}) {
    const skip = (page - 1) * limit;

    const data = await Account.find(filter)
      .sort({ createdAt: -1 }) // here -1 means that it will sort in descending order and 1 means ascending order
      .skip(skip)
      .limit(limit)
      .lean();

    const total = await Account.countDocuments(filter);

    return {
      data,
      metadata: {
        total,
        page,
        pages: Math.ceil(total / limit)
      }
    };
  }


  async update(id, updateData) {
    return await Account.findByIdAndUpdate(id, updateData, { 
      new: true, 
      runValidators: true 
    });
  }

  async delete(id) {
    return await Account.findByIdAndDelete(id);
  }

  async findByEmail(email) {
    return await Account.findOne({ email });
  }
}

module.exports = new AccountRepository();