// src/middlewares/security.js
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100,
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again after 15 minutes'
  }
});

const setupSecurity = (app) => {
  app.use(helmet());
  app.use(cors());

  app.use(limiter);
};

module.exports = { setupSecurity, limiter };