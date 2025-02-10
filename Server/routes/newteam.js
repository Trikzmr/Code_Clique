const express = require('express');
const project = require('../model/post'); 
const router = express.Router();

router.post('/addnewarray', async (req, res) => {
    const { _id, Team } = req.body; 
  
    try {
      const updatedPost = await project.findOneAndUpdate(
        { _id}, 
        { $addToSet: { Team } }, 
        { new: true } 
      );
  
      if (!updatedPost) {
        return res.status(404).json({ message: 'Post not found' });
      }
  
      res.json({ message: 'Developer added successfully', post: updatedPost });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  });

module.exports = router;
