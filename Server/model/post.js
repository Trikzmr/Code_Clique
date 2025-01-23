const mongoose = require('mongoose');

// Create User schema
const Postschema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    
  },
  Title: {
    type: String,
    
  },
  Description: {
    type: String,
    
  },
  Category: {
    type: Number,
    
  },
  Keyskills: {
    type: [String],
    
  },
  TeamRequest: {
    type: [String],
    
  },
  MentorRequest: {
    type: [String],
    
  },
  Team: {
    type: [String],
    
  },
  Mentor: {
    type: [String],
    
  },
  Githubkink: {
    type: String,
    
  },
  Notice: {
    type: [String],
    
  },

  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// Export the model
const Post = mongoose.model('Post', PostSchema);
module.exports = Post;