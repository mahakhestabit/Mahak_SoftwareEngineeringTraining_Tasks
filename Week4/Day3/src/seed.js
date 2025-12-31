const mongoose = require('mongoose');
const Product = require('./models/product.model');
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase')
.then(async () => {
    console.log('Seeding data...');
    
    await Product.deleteMany({});
    await Product.insertMany([
        { name: "iPhone 13", price: 800, description: "Apple smartphone", tags: ["apple", "electronics", "phone"] },
        { name: "iPhone 14 Pro", price: 1100, description: "Latest Apple phone", tags: ["apple", "electronics", "phone"] },
        { name: "Samsung Galaxy S23", price: 900, description: "Android smartphone", tags: ["samsung", "electronics", "phone"] },
        { name: "MacBook Air", price: 1200, description: "Apple laptop M2", tags: ["apple", "laptop"] },
        { name: "Dell XPS 13", price: 1000, description: "Windows laptop", tags: ["dell", "laptop"] }
    ]);

    console.log('Data added!');
    mongoose.connection.close();
});