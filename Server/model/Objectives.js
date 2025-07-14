const mongoose = require('mongoose');

// Nested Schema for ObjectiveItem
const ObjectiveItemSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true
  },
  Status: {
    type: Number,
    required: true
  }
}, { _id: false });

// Nested Schema for PhaseItem
const PhaseItemSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true
  },
  Objectives: {
    type: [ObjectiveItemSchema],
  }
}, { _id: false });

// Main Objective Schema
const Objectiveschema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
  Phase: {
    type: [PhaseItemSchema],

  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// Create and export the model
const Objective = mongoose.model('Objective', Objectiveschema);
module.exports = Objective;
