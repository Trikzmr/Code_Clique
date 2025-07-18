// //to update user details get username from middleware and update the details in the database


const express = require('express')
const Task = require('../model/TaskModel');
const api = express.Router();
const authenticate = require('../Middleware/Authentication'); // Import the authentication middleware
const User = require('../model/userModel');

const apicall = async (req, res) => {
    const {Username} = req.user;
    const {DateOfBirth, Qualification, Skills, Address, Organization, GithubUrl, Description, WebsiteLink, LinkedinLink} = req.body;

    try{
        const connectDB = require("../db/conn");
    await connectDB(); 
        const user = await User.findOne({Username});
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
        user.DateOfBirth = DateOfBirth || user.DateOfBirth;
        user.Qualification = Qualification || user.Qualification;
        user.Skills = Skills || user.Skills;
        user.Address = Address || user.Address;
        user.Organization = Organization || user.Organization;
        user.GithubUrl = GithubUrl || user.GithubUrl;
        user.Description = Description || user.Description;
        user.WebsiteLink = WebsiteLink || user.WebsiteLink;
        user.LinkedinLink = LinkedinLink || user.LinkedinLink;

        await user.save();
        return res.status(200).json({message: "User updated successfully"});
        
    }
    catch(error){
        console.error(error.message);
        return res.status(500).send("server error");
    }
}


api.post('/UpdateUser', authenticate, apicall);

module.exports = api;




// const apicall = async (req, res) => {
//     const {Username} = req.user;
//     const {DateOfBirth, Qualification, Skills, Address, Organization, GithubUrl, Description, WebsiteLink, LinkedinLink} = req.body;

//     try{
//         const user = await User.findOne({Username});
//         if(!user){
//             return res.status(404).json({message: "User not found"});
//         }
//         user.DateOfBirth = DateOfBirth || user.DateOfBirth;
//         user.Qualification = Qualification || user.Qualification;
//         user.Skills = Skills || user.Skills;
//         user.Address = Address || user.Address;
//         user.Organization = Organization || user.Organization;
//         user.GithubUrl = GithubUrl || user.GithubUrl;
//         user.Description = Description || user.Description;
//         user.WebsiteLink = WebsiteLink || user.WebsiteLink;
//         user.LinkedinLink = LinkedinLink || user.LinkedinLink;

//         await user.save();
//         return res.status(200).json({message: "User updated successfully"});
        
//     }
//     catch(error){
//         console.error(error.message);
//         return res.status(500).send("server error");
//     }
// }

// api.post('/UpdateUser', authenticate, apicall);