const TaskModel = require('../model/TaskModel'); // Import the request model
const express = require('express'); // Import the express module
require('dotenv').config(); // Import the dotenv module
const  router = express.Router(); // Import the express router
const Authentication = require('../Middleware/Authentication'); // Import the authentication middleware

const api = async(req, res) => {
    
    try {
        const connectDB = require("../db/conn");
    await connectDB(); 
        const {_id} = req.body;
        console.log(_id);
        const result = await TaskModel.findByIdAndDelete(_id);
        
        console.log('Deleted entry:', result);
        res.json(result);
        
    } catch (error) {
        res.json(error);
    }
    
}

router.post('/deleteTask',  api); 

module.exports = router; // Export the router
