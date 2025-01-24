const express = require('express');
const router = express.Router();
const  data = require('../model/post');

router.get('/getdata',api)

async function api(req,res){
    try {
        let user = await data.find();
        console.log(user);
        res.json(user);
    } catch (error) {
        res.json(error);
    }

}
module.exports = router;