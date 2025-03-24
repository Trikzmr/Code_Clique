const express = require('express');
const Task = require('../model/TaskModel');
const api = express.Router();
const authenticate = require('../Middleware/Authentication');

const apicall = async (req, res) => {
    const { _id, Members } = req.body;

    if (!_id || !Array.isArray(Members)) {
        return res.status(400).json({ error: 'Invalid input data' });
    }

    try {
        // Update the Members array in the database
        const updatedTask = await Task.findByIdAndUpdate(
            _id,
            { $addToSet: { Members: { $each: Members } } }, // Ensures no duplicate members
            { new: true, runValidators: true }
        );

        if (!updatedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }

        res.status(200).json({ message: 'Members added successfully', task: updatedTask });
    } catch (error) {
        console.error('Error updating Members:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

api.post('/AssignMembers', apicall);

module.exports = api;
