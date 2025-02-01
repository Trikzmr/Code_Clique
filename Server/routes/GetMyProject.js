
// get post data from the database from username api

const express = require('express');
const router = express.Router();
const post = require('../model/post');
const authenticate = require('../Middleware/Authentication'); // Import the authentication middleware

router.get('/getmyproject',authenticate, api)

async function api(req,res){
    try {
        let team = await post.find({Team: { $in: [req.user.Username] }}); // Find all posts where the user is in the team
        let mentor = await post.find({Mentor: { $in: [req.user.Username] }}); // Find all posts where the user is the mentor
        let owner = await post.find({username: req.user.Username}); // Find all posts where the user is the owner
        
        // join the arrays of team, mentor and owner

        let data = team.concat(mentor).concat(owner);
        res.json(data);
    } catch (error) {
        res.json(error);
    }
}

exports = module.exports = router;
