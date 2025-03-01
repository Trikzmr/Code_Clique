const express = require('express')
const Task = require('../model/TaskModel');
const api = express.Router();

const apicall = async (req, res) => {
    const { ProjectId } = req.body;

    try {
        const task = await Task.find({ProjectId});
        res.status(200).json(task);
    }
    catch(error){
        console.error(error.message);
        res.status(500).send("Server Error");
    }
}

api.post('/FindTaskByProjectId', apicall);

module.exports = api;