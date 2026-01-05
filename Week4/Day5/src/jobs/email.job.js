const { Queue, Worker } = require('bullmq');
const IORedis = require('ioredis');
const logger = require('../utils/logger');

const connection = new IORedis({ maxRetriesPerRequest: null });

const emailQueue = new Queue('email-queue', { connection });

const emailWorker = new Worker('email-queue', async (job) => {

    logger.info(`Processing job ${job.id}: Sending email to ${job.data.email}...`, { requestId: job.data.requestId });
    
    await new Promise(resolve => setTimeout(resolve, 2000)); 
    
    logger.info(`Job ${job.id} Completed: Email sent!`, { requestId: job.data.requestId });
}, { connection });

//Listen for errors
emailWorker.on('error', err => {
    logger.error(`Job Error: ${err.message}`);
});

module.exports = { emailQueue };