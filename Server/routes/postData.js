const express = require('express')
const User = require('../model/post');
const api = express.Router();




// Register Route
api.post('/postdata', async (req, res) => {
  const {username,title,Description,Category,Keyskills} = req.body;

  try {
    // Create a new user
    data = new User({
        username,
        title,
        Description,
        Category,
        Keyskills
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