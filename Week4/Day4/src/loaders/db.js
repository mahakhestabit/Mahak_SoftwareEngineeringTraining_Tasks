const mongoose = require('mongoose');
const config = require('../config');
const logger = require('../utils/logger');

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(config.databaseURL);
    logger.info('Database connected successfully');
    return connection.connection.db;
  } catch (err) {
    logger.error(`Error connecting to database: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;