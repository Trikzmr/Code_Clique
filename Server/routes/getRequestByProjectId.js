const express = require('express');
const project = require('../model/request'); 
const Router = express.Router();

Router.post('/byprojectid',api);

 async function api(req,res){
    const {projectId} =req.body;
    try {
        const connectDB = require("../db/conn");
    await connectDB(); 
        let user = await project.find({projectId});
        console.log(user);
        res.json(user);
        
    } catch (error) {
        
        res.jon(error);
        
    }
 }
 module.exports = Router;
