const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  username: String,
  img: {
    data: Buffer,
    contentType: String,
  },
});

module.exports = mongoose.model('Image', imageSchema);
