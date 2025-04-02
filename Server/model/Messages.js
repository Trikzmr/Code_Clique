const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    roomId: { type: String, required: true },  // Chat room ID
    sender: { type: String, required: true }, // Username of sender
    message: { type: String, required: true }, // Message content
    timestamp: { type: Date, default: Date.now } // Auto-generated timestamp
});

module.exports = mongoose.model("Message", MessageSchema);

