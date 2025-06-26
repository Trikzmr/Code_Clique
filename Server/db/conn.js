const mongoose = require("mongoose");

const DB = "mongodb+srv://debabratodas729:qzqRYddVN5eFh72K@database1.u7jnn.mongodb.net/?retryWrites=true&w=majority&appName=Database1";

let isConnected = false;

async function connectDB() {
  if (isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = db.connections[0].readyState;
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
  }
}

module.exports = connectDB;
