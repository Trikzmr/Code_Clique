const { Server } = require("socket.io");
const Message = require("../model/Messages"); // Import Message model

module.exports = (server) => {
    const io = new Server(server, {
        cors: {
            origin: ["http://localhost:5173", "http://localhost:5174"],
            methods: ["GET", "POST"],
        },
    });

    io.on("connection", (socket) => {
        console.log("User Connected:", socket.id);

        // User joins a chat room
        socket.on("joinRoom", async (roomId) => {
            socket.join(roomId);
            console.log(`User ${socket.id} joined room: ${roomId}`);

            // Fetch previous messages from MongoDB and send to user
            const messages = await Message.find({ roomId }).sort({ timestamp: 1 });
            socket.emit("previousMessages", messages);
        });

        // Listen for messages and save them to MongoDB
        socket.on("sendMessage", async (data) => {
            console.log("Message received:", data);

            // Create and save message in MongoDB
            const newMessage = new Message({
                roomId: data.roomId,
                sender: data.sender,
                message: data.message,
            });
            await newMessage.save();

            // Broadcast message to the room
            io.to(data.roomId).emit("receiveMessage", {
                sender: data.sender,
                message: data.message,
                timestamp: newMessage.timestamp,
            });
        });

        // Handle user disconnection
        socket.on("disconnect", () => {
            console.log("User Disconnected:", socket.id);
        });
    });

    return io; // Return the io instance if needed
};
