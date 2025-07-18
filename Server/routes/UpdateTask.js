const express = require('express');
const Task = require('../model/TaskModel');
const api = express.Router();
const authenticate = require('../Middleware/Authentication');

const updateTask = async (req, res) => {
    const { TaskId, Title, Description, StartDate, EndDate, Status } = req.body;
    const { Username } = req.user;
 
    try {
        const connectDB = require("../db/conn");
    await connectDB(); 
        const task = await Task.findOne({ _id: TaskId});

        if (!task) {
            return res.status(404).json({ message: "Task not found or unauthorized" });
        }

        // Update only provided fields
        if (Title) task.Title = Title;
        if (Description) task.Description = Description;
        if (StartDate) task.StartDate = StartDate;
        if (EndDate) task.EndDate = EndDate;
        if (Status) task.Status = Status;

        await task.save();
        res.status(200).json({ message: "Task updated successfully", task });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
}

api.put('/UpdateTask', authenticate, updateTask);

module.exports = api;
