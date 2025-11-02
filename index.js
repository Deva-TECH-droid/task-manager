require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const port = process.env.PORT || 3000;
const db_url = process.env.MONGODB_URL;

// Express app
const app = express();
app.use(bodyParser.json());

// Task schema
const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    dueDate: Date,
    completed: Boolean,
});

// Task model
const Task = mongoose.model("Task", taskSchema);

// POST: Create a new task
app.post("/tasks", async (req, res) => {
    try {
        const { title, description, dueDate, completed } = req.body;
        const newTask = await Task.create({
            title,
            description,
            dueDate,
            completed,
        });

        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: "Error creating task", error });
    }
});

// ✅ Connect DB first then start server
mongoose
  .connect(db_url)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
    app.listen(port, () =>
      console.log(`🚀 Server started on http://localhost:${port}`)
    );
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Failed:", err);
  });
