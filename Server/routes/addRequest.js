const express = require('express');
const request = require('../model/request'); 
const api = express.Router();

api.post('/Addrequest', async (req, res) => {
  const { username, projectId, skills, message, publicProfileLink, projectLink } = req.body;

  try {
    const Request = new request({
      username,
      projectId,
      skills,
      message,
      publicProfileLink,
      projectLink
    });

    await Request.save();
    console.log(Request);
    res.status(201).json({ message: "Request added successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send( "Server error" );
  }
});

module.exports = api;
