const mongoose = require('mongoose');

const Postrequest = new mongoose.Schema({
  Username: {
    type: String,
    
  },
  projectId: {
    type: String,
    
  },
  skills: {
    type: [String],
    
  },
  message: {
    type: String,
    
  },
  publicProfileLink: {
    type: String,
    
  },
  projectLink: {
    type: String,
    
  },
  role: {
    type: String,
    
  }, 

  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// Export the model
const request = mongoose.model('Postrequest', Postrequest);
module.exports = request;