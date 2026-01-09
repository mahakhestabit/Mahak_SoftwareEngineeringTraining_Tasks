const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const os = require("os");

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

app.get("/", (req, res) => {
  const containerName = os.hostname();
  console.log(`Traffic handled by container: ${containerName}`); 

  res.send(`Backend is running with MongoDB and Docker! [Handled by: ${containerName}]`);
});

app.post("/api/users", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
    console.log(`User created on ${os.hostname()}:`, newUser); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/users", async (req, res) => {
    try {
        console.log(`Fetching users from container: ${os.hostname()}`);
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} | Container: ${os.hostname()}`);
});