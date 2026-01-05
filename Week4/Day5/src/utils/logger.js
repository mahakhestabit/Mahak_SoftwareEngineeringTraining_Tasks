const winston = require('winston');
const path = require('path');

// Define log format
const logFormat = winston.format.printf(({ timestamp, level, message, requestId }) => {
  return `${timestamp} [${requestId || 'System'}] ${level.toUpperCase()}: ${message}`;
});

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    logFormat
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: path.join(__dirname, '../logs/app.log') })
  ]
});

module.exports = logger;