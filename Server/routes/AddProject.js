//purpose: to handle routes for post data
const express = require('express')
const User = require('../model/post');
const api = express.Router();
const authenticate = require('../Middleware/Authentication');




// Register Route
api.post('/AddProject', authenticate , async (req, res) => {
  
  const {Username} = req.user;
  const {Title,Description,Category,Keyskills, Keypoints} = req.body;
  const username =Username;

  try {
    const connectDB = require("../db/conn");
    await connectDB(); 
    // Create a new user
    data = new User({
        username,
        Title,
        Description,
        Category,
        Keyskills,
        Keypoints,
    });

    // Save the user to the database
    await data.save();
    console.log(data);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});





  module.exports = api;