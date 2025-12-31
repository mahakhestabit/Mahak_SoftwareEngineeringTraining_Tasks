const express = require('express');
const config = require('./config');
const loadApp = require('./loaders/app'); 
const loadDatabase = require('./loaders/db'); 
const logger = require('./utils/logger');

async function startServer() {
  const app = express();

  app.get('/', (req, res) => {
    res.send("I am home")
  })


  await loadDatabase(); 
  await loadApp(app);

  app.listen(config.port, () => {
    logger.info(`Server started on port ${config.port}`);
  });

}

startServer();