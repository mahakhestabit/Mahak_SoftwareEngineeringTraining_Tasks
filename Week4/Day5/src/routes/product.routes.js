const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

const { validate, productSchema } = require('../middlewares/validate');

router.get('/', productController.getProducts);

router.post('/', validate(productSchema), (req, res) => {
    res.json({ success: true, message: "Validation passed!", data: req.body });
});

router.delete('/:id', productController.deleteProduct);

module.exports = router;