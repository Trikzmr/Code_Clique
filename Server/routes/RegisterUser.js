const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../model/userModel')

const apicreate = async(req, res) => {
    const input = req.body;
    const email = input.Email;
    try {
        let finduser = await User.findOne({email});
        if (finduser) {
        return res.status(400).json({ message: "User already exists" });
        }
        // Hash the password

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(input.Password, salt);
        input.Password = hashedPassword;
        const user = new User(input);

        // Save the user to the database
        await user.save();
        console.log(user);
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.log(error);
        res.status(401).json({err: error});
    }
    
}

router.post('/RegisterUser', apicreate);

module.exports = router;