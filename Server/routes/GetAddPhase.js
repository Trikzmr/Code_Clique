const express = require('express');
const Model = require('../model/Objectives');

const api = express.Router();

const apicontroller = async (req, res) => {
    try {
        const connectDB = require("../db/conn");
    await connectDB(); 
        const { id, Title } = req.body;

        let response = await Model.findOne({ id });

        if (!response) {
            const data = new Model({ id, Title });
            response = await data.save();  // ✅ Await is added here
        }

        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });  // ✅ Better error format
    }
};

api.post('/getPhaseDetails', apicontroller);

module.exports = api;