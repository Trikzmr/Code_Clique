const express = require('express');
const router = express.Router();
const  data = require('../model/post');

router.post('/getpostdatabyid',api)

async function api(req,res){
    const {_id} =req.body;
    try {
        let user = await data.findOne({_id});
        console.log(user);
        res.json(user);
    } catch (error) {
        res.json(error);
    }

}
module.exports = router;