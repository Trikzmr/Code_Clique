const mongoose = require('mongoose');

// Create User schema
const Counter = new mongoose.Schema({
  Count: {
    type: Number,
    default:0,
    required: true,
  },
});

// Export the model
const Count = mongoose.model('Counter', Counter);
module.exports = Count;