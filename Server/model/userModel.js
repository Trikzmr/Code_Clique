const mongoose = require('mongoose');

const User = new mongoose.Schema({
    FirstName: {
        type: String,
        require: true
    },
    LastName: {
        type: String,
        require: true
    },
    Email: {
        type: String,
        require: true,
        unique: true,
    },
    Username: {
        type: String,
        require: true
    },
    PhoneNumber: {
        type: String,
        require: true
    },
    Password: {
        type: String,
        require: true
    },
    DateOfBirth: {
        type: String,

    },
    Qualification: {
        type: String,

    },
    Skills: {
        type: [String],

    },
    Address: {
        type: String,
   
    },
    ConnectionList : {
        type: [String],
   
    },
    Organization: {
        type: String,
  
    },
    ProjectList : {
        type: [String],
    },

    GithubUrl: {
        type: String,
    },

    Description: {
        type: String,
    },

    WebsiteLink: {
        type: String,
    },
    LinkedinLink: {
        type: String,
    },
   
    createdAt: { 
        type: Date,
        default: Date.now,
     },

     views:{
        type: [String]
     }
})

const user = new mongoose.model("User", User)

module.exports = user;