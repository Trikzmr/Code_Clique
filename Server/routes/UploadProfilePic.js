const express = require('express');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const Image = require('../model/image');
const authenticate = require('../Middleware/Authentication'); // Import the authentication middleware
const api = express.Router();

const apicall = async(req, res) =>{
    console.log(req.file); // contains the uploaded file info
    res.json({ message: 'Upload successful!' });
}

api.post('/upload', authenticate ,upload.single('profilePic'), apicall);
module.exports = api;