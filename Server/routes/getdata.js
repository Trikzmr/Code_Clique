const express = require('express');
const router = express.Router();
const user = require('../model/post');

router.get('/getdata',api)

async function api(req,res){
    try {
        let data = await user.find();
        console.log(data);
        res.json(data);
    } catch (error) {
        res.json(error);
    }

}
module.exports = router;