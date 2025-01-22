const express = require('express');
const  router = express.Router();
const User = require('../model/userModel');
const jwt = require('jsonwebtoken'); 
const bcrypt = require('bcryptjs');

 

 const api = async(req, res) => {
    const { Email, Password } = req.body;
    try {
        // Check if user exists
        const user = await User.findOne({ Email });
        if (!user) {
          return res.status(400).json({ message: "Invalid credentials" });
        }
    
        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(Password, user.Password);
        if (!isMatch) {
          return res.status(400).json({ message: "Invalid credentials" });
        }
    
        // Generate a JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '6h' });
    
        // Respond with the token and user info (excluding password)
        res.json({
          token,user
        })
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
      }
 }

 router.post('/LoginUser',api);

 module.exports = router;