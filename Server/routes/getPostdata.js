const express = require('express');
const router = express.Router();
const post = require('../model/post');
const authenticate = require('../Middleware/Authentication'); // Import the authentication middleware

router.get('/getpostdata',authenticate, api)

async function api(req,res){
    let username = req.user.Username
    try {
        const connectDB = require("../db/conn");
    await connectDB(); 
        let data = await post.find();
        let filterdata = [];
        for(let i = 0; i<data.length; i++){
            if(!data[i].Team.includes(username) || !data[i].username === username){
                filterdata.push(data[i]);
            }
        }
  
        res.json(filterdata);
    } catch (error) {
        res.json(error);
    }

}
module.exports = router;