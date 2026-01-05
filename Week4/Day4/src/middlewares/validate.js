// src/middlewares/validate.js
const Joi = require('joi');

const productSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  price: Joi.number().min(0).required(),
  description: Joi.string().max(500).optional(),
  tags: Joi.array().items(Joi.string()).optional()
});

const userSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
});

const validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    
    if (error) {
      return res.status(400).json({
        success: false,
        message: 'Validation Error',
        details: error.details.map((detail) => detail.message)
      });
    }
    
    next();
  };
};

module.exports = { validate, productSchema, userSchema };