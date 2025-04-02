import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const Messages = () => {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    let username = "deb";
    let roomId = "room1";

    useEffect(() => {
        // Create a new socket connection inside useEffect
        const socket = io("http://localhost:3000", { transports: ["websocket"] });

        // Join a specific project chat room
        console.log("Joining room:", roomId);
        socket.emit("joinRoom", roomId);

        // Load previous messages
        socket.on("previousMessages", (msgs) => {
            setMessages(msgs);
        });

        // Listen for new messages
        socket.on("receiveMessage", (data) => {
            setMessages((prev) => [...prev, data]);
        });

        return () => {
            socket.disconnect();
        };
    }, [roomId]); // Dependency on roomId to rejoin on change

    // Send message to server
    const sendMessage = () => {
        if (message.trim() !== "") {
            // Reconnect the socket before sending a message
            const socket = io("http://localhost:3000", { transports: ["websocket"] });
            socket.emit("sendMessage", { sender: username, message, roomId });
            setMessage("");
        }
    };

    return (
        <div>
            <h2>Room: {roomId}</h2>
            <div>
                {messages.map((msg, i) => (
                    <p key={i}>
                        <b>{msg.sender}:</b> {msg.message} <small>({new Date(msg.timestamp).toLocaleTimeString()})</small>
                    </p>
                ))}
            </div>
            <input value={message} onChange={(e) => setMessage(e.target.value)} />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Messages;
