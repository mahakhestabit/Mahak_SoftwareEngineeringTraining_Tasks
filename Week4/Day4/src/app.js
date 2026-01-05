const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/product.routes');
const { errorMiddleware } = require('./middlewares/error.middleware');
const { setupSecurity } = require('./middlewares/security'); 

const app = express();


setupSecurity(app);

app.use(express.json({ limit: '10kb' })); 

mongoose.connect('mongodb://127.0.0.1:27017/mydatabase')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Database connection error:', err));

// Routes
app.use('/products', productRoutes);

app.get('/', (req, res) => {
  res.send(" i am home page")
})


app.use(errorMiddleware);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});