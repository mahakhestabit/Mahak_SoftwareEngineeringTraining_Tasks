const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

// Root Route (To check if server is running)
app.get("/", (req, res) => {
  res.send("Backend is running with MongoDB");
});

// POST Route (To Create Data - Test this in Postman)
app.post("/api/users", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
    console.log("User created:", newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET Route (To Read Data - Test Persistence)
app.get("/api/users", async (req, res) => {
    
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    res.send("maahak");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});