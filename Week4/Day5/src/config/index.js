const dotenv = require('dotenv');
const path = require('path');


const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env';

dotenv.config({ path: path.resolve(process.cwd(), envFile) });

module.exports = {
  port: process.env.PORT || 3000,
  databaseURL: process.env.DATABASE_URL,
  env: process.env.NODE_ENV || 'development',
  apiPrefix: '/api',
};