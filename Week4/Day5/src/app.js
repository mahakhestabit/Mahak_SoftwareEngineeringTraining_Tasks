const express = require('express');
const mongoose = require('mongoose');
const { setupSecurity } = require('./middlewares/security');
const tracingMiddleware = require('./utils/tracing.js'); 
const { emailQueue } = require('./jobs/email.job');
const logger = require('./utils/logger');

const app = express();

setupSecurity(app);
app.use(express.json({ limit: '10kb' }));

app.use(tracingMiddleware);

app.post('/send-email', async (req, res) => {
    const { email } = req.body;
    
    if (!email) {
        logger.error('Email is missing in request', { requestId: req.requestId });
        return res.status(400).json({ success: false, message: 'Email is required' });
    }

    // Add job to the queue
    await emailQueue.add('send-email-job', { 
        email, 
        requestId: req.requestId // Pass ID to track it in the worker
    });

    logger.info(`Email job added to queue for ${email}`, { requestId: req.requestId });

    res.json({ 
        success: true, 
        message: 'Email processing started in background', 
        requestId: req.requestId 
    });
});

// Root Route
app.get('/', (req, res) => {
    res.send('Day 5: Workers & Observability Ready!');
});

// Database Connection
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase')
  .then(() => logger.info('Connected to MongoDB'))
  .catch((err) => logger.error('DB Error: ' + err.message));

const PORT = 3000;
app.listen(PORT, () => {
  logger.info(`Server running on http://localhost:${PORT}`);
});