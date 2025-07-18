const express = require('express');
const  router = express.Router();
const mongo = require('../model/userModel');

 router.get('/AllUsers',api)
 
 async function api(req,res){
    try {
        const connectDB = require("../db/conn");
    await connectDB(); 
        let data = await mongo.find();
        console.log(data);
        res.json(data);

    } catch (error) {
        res.json(error);

    }
 } 


 module.exports = router;