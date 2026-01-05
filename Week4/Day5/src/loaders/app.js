const express = require('express');
const connectDB = require('./db');
const logger = require('../utils/logger');
const config = require('../config');

const loadApp = async (app) => {
  await connectDB();

  app.use(express.json());
  logger.info('Middlewares loaded');
  logger.info('Routes mounted: 0 endpoints');
  
  return app;
};

module.exports = loadApp;