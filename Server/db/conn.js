const mongoose = require("mongoose");

const DB = "mongodb+srv://debabratodas729:qzqRYddVN5eFh72K@database1.u7jnn.mongodb.net/?retryWrites=true&w=majority&appName=Database1";



mongoose.connect(DB, {})
    .then(() => console.log("Connection successful"))
    .catch((error) => {
        console.error("MongoDB connection error:", error);
        console.error("Cause:", error.cause);
    });
