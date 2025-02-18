const requestModel = require('../model/request'); // Import the request model
const express = require('express'); // Import the express module
require('dotenv').config(); // Import the dotenv module
const  router = express.Router(); // Import the express router
const Authentication = require('../Middleware/Authentication'); // Import the authentication middleware

const api = async(req, res) => {
    
    try {
        const {_id} = req.body;
        console.log(_id);
        const result = await requestModel.findByIdAndDelete(_id);
        
        console.log('Deleted entry:', result);
        res.json(result);
        
    } catch (error) {
        res.json(error);
    }
    
}

router.post('/deleteRequest',  api); 

module.exports = router; // Export the router
