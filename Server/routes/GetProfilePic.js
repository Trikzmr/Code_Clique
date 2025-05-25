const express = require('express');
const imageModel = require('../model/image');

const api = express.Router();

const apicall = async(req, res) =>{
    try {
        const {username} = req.body;
        const image = await imageModel.findOne({username});
        if (!image) {
            return res.status(404).json({ message: "Image not found" });
        }
        res.status(200).json(image);
    } catch (error) {
       console.error(error.message);
       return res.status(500).send("Server error"); 
    }
}

api.post('/getprofilepic', apicall);

module.exports = api;