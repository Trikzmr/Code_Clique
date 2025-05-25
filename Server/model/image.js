const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  username:{
    type: String,
    required: true,
    unique: true,
  },
  imageUrl: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Image', imageSchema);
