// controllers/product.controller.js
const productService = require('../services/product.service');
const { AppError } = require('../middlewares/error.middleware');

exports.getProducts = async (req, res, next) => {
  try {
    // Pass query parameters (search, filters, etc.) to the service
    const data = await productService.getAllProducts(req.query);
    
    res.status(200).json({
      success: true,
      data: data
    });
  } catch (error) {
    next(error); // Passes error to error.middleware.js
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    const deletedProduct = await productService.softDeleteProduct(id);

    if (!deletedProduct) {
      throw new AppError('Product not found', 404);
    }

    res.status(200).json({
      success: true,
      message: 'Product soft deleted successfully',
      data: deletedProduct
    });
  } catch (error) {
    next(error);
  }
};