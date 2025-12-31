const express = require('express');
const mongoose = require('mongoose'); 
const productRoutes = require('./routes/product.routes');
const { errorMiddleware } = require('./middlewares/error.middleware');

const app = express();


mongoose.connect('mongodb://127.0.0.1:27017/mydatabase')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Database connection error:', err));

app.use(express.json());


app.use('/products', productRoutes);


app.use(errorMiddleware);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});