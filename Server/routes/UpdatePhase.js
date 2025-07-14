const express = require('express');
const Model = require('../model/Objectives');

const api = express.Router();

const updateController = async (req, res) => {
    try {
        const data = req.body;

        if (!data.id) {
            return res.status(400).json({ error: "ID is required to update" });
        }

        const updatedDoc = await Model.findOneAndUpdate(
            { id: data.id },  // Find by id
            data,             // Replace fields with what's in req.body
            { new: true }     // Return the updated document
        );

        if (!updatedDoc) {
            return res.status(404).json({ error: "Document not found" });
        }

        res.json(updatedDoc);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

api.put('/updatePhaseDetails', updateController);

module.exports = api;