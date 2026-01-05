
const { v4: uuidv4 } = require('uuid');
const logger = require('./logger');

const tracingMiddleware = (req, res, next) => {
  // 1. Generate or retrieve Request ID
  const requestId = req.headers['x-request-id'] || uuidv4();
  
  // 2. Attach it to the request object for other files to use
  req.requestId = requestId;
  
  // 3. Set it in the response header so the client sees it
  res.setHeader('X-Request-ID', requestId);

  // 4. Log the incoming request
  logger.info(`Incoming Request: ${req.method} ${req.url}`, { requestId });

  next();
};

module.exports = tracingMiddleware;