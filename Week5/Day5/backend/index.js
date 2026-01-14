const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const mongoURI = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@db:27017/${process.env.DB_NAME}?authSource=admin`;

mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));


const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', UserSchema);

app.post('/api/submit', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    console.log("Data saved:", req.body);
    res.status(201).json({ message: "Data saved to NoSQL successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 }); 
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

app.listen(3000, () => console.log('Backend listening on port 3000'));