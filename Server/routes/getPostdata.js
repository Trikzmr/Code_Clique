const express = require('express');
const router = express.Router();
const post = require('../model/post');
const authenticate = require('../Middleware/Authentication'); // Import the authentication middleware

router.get('/getpostdata',authenticate, api)

async function api(req,res){
    try {
        let data = await post.find();
        console.log(data);
        res.json(data);
    } catch (error) {
        res.json(error);
    }

}
module.exports = router;