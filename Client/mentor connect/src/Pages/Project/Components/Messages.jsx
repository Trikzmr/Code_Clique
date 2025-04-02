import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const Messages = ({id}) => {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [user, setuser] = useState({});
    const [username, setusername] = useState("deb");
    let roomId = id;
    const getmyusername = async () => {
        
        try{
          const api = "http://localhost:3000/api/messageapi";
          const container = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: 'include'   
          };
          const res = await fetch(api, container);
          const data = await res.json();
          setuser(data);
          setusername(data.Username)
        }
        catch(error){
          console.log(error);
        }
      }

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
    }, [roomId, username]); // Dependency on roomId to rejoin on change

    const apicall =()=>{
        getmyusername();
    }

    useEffect(apicall, [])

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
