
// get post data from the database from username api

const express = require('express');
const router = express.Router();
const post = require('../model/post');
const authenticate = require('../Middleware/Authentication'); // Import the authentication middleware

router.get('/getmyproject',authenticate, api)

async function api(req,res){
    try {
        let data = await post.find({Team: { $in: [req.user.username] }}); // Find all posts where the user is in the team
        console.log(data);
        res.json(data);
    } catch (error) {
        res.json(error);
    }
}

exports = module.exports = router;
