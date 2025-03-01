const requestModel = require('../model/request'); // Import the request model
const express = require('express'); // Import the express module
require('dotenv').config(); // Import the dotenv module
const  router = express.Router(); // Import the express router
const Authentication = require('../Middleware/Authentication'); // Import the authentication middleware

const api = async(req, res)=>{ // Create an asynchronous function called api
    const{Username} = req.user; // Get the username from the request
    const {projectId, skills, message, publicProfileLink, projectLink, role} = req.body; // Get the projectId, skills, message, publicProfileLink and projectLink from the request

    try {
        const request = new requestModel({ // Create a new request
            projectId, 
            skills,
            message,
            publicProfileLink,
            projectLink,
            role,
            Username
        });
        await request.save(); // Save the request
        res.json(request); // Return the request
        console.log(request);
    }
    catch (error) {
        res.json(error); // Return the error
    }    
}

router.post('/sendRequest', Authentication, api); // Create a new route for sending a request

module.exports = router; // Export the router
