const mongoose = require("mongoose");

const DB = "mongodb+srv://debabratodas729:qzqRYddVN5eFh72K@database1.u7jnn.mongodb.net/?retryWrites=true&w=majority&appName=Database1";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      maxPoolSize: 5, // limit connections for free tier
    }).then((mongoose) => {
      console.log("✅ MongoDB connected");
      return mongoose;
    }).catch((err) => {
      console.error("❌ MongoDB connection error:", err.message);
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

module.exports = connectDB;
