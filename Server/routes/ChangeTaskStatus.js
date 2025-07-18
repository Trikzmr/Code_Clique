const express = require("express");
const Task = require("../model/TaskModel");
const api = express.Router();

const apicall = async (req, res) => {
  try {
    const connectDB = require("../db/conn");
    await connectDB(); 
    const { _id, status } = req.body;

    // Validate input
    if (!_id || !status) {
      return res.status(400).json({ message: "Task ID and status are required" });
    }

    // Find and update the task
    const updatedTask = await Task.findByIdAndUpdate(
      _id,
      { Status: status },
      { new: true } // Return updated document
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task status updated successfully", task: updatedTask });
  } catch (error) {
    console.error("Error updating task status:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

api.post("/changetaskstatus", apicall);

module.exports = api;
