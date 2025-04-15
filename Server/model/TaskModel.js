const mongoose = require('mongoose');

const Task = new mongoose.Schema({
    Title: {
        type: String,
        require: true
    },
    Description: {
        type: String,
        require: true
    },
    ProjectId: {
        type: String,
        require: true,
    },
    Username: {
        type: String,
        require: true
    },
    ProjectOwner: {
        type: String,
        require: true
    },
    StartDate: {
        type: String,
        require: true
    },
    EndDate: {
        type: String,

    },
    Members: {
        type: [String],

    },
    Keypoints: {
        type: [String],

    },
    Status: {
        type:String,
        require:true,
    }   
})

const task = new mongoose.model("Task", Task)

module.exports = task;