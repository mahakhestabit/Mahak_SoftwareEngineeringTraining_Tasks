// services/product.service.js
const Product = require('../models/product.model'); 
const buildQuery = (queryParams) => {
  const { search, minPrice, maxPrice, tags, includeDeleted } = queryParams;
  const query = {};
  if (includeDeleted !== 'true') {
    query.deletedAt = null;
  }
  if (search) {
    query.$or = [
      { name: { $regex: search, $options: 'i' } }, // Case insensitive
      { description: { $regex: search, $options: 'i' } }
    ];
  }

  if (minPrice || maxPrice) {
    query.price = {};
    if (minPrice) query.price.$gte = Number(minPrice);
    if (maxPrice) query.price.$lte = Number(maxPrice);
  }


  if (tags) {
    const tagsArray = tags.split(',');
    query.tags = { $in: tagsArray };
  }

  return query;
};

exports.getAllProducts = async (queryParams) => {
  const filter = buildQuery(queryParams);


  let sort = {};
  if (queryParams.sort) {
    const [field, order] = queryParams.sort.split(':');
    sort[field] = order === 'desc' ? -1 : 1;
  } else {
    sort = { createdAt: -1 };
  }

  const page = Number(queryParams.page) || 1;
  const limit = Number(queryParams.limit) || 10;
  const skip = (page - 1) * limit;


  const products = await Product.find(filter)
    .sort(sort)
    .skip(skip)
    .limit(limit);
    
  const total = await Product.countDocuments(filter);

  return { products, total, page, totalPages: Math.ceil(total / limit) };
};

exports.softDeleteProduct = async (id) => {
  return await Product.findByIdAndUpdate(
    id, 
    { deletedAt: new Date() }, 
    { new: true }
  );
};