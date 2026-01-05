const express = require('express');
const config = require('./config');
const loadApp = require('./loaders/app'); 
const logger = require('./utils/logger');

  async function startServer() {
    const app = express();

    await loadApp(app);

    app.listen(config.port, () => {
      logger.info(`Server started on port ${config.port}`);
    });
  }

  startServer();