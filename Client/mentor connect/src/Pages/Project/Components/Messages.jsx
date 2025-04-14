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
        <div className=" MessagesSection flex flex-col p-4 rounded-2xl bg-white shadow-md max-h-[80vh] min-h-[80vh] w-full">
            <div className="flex-1 overflow-y-auto space-y-3 mb-4">
            {messages.map((msg, i) => (
                <div
                    key={i}
                    className={`flex ${
                    msg.sender === username ? "justify-end" : "justify-start"
                    }`}
                >
                    <div
                    className={`max-w-xs px-4 py-2 rounded-xl shadow-sm ${
                        msg.sender === username
                        ? "bg-blue-100 text-blue-900"
                        : "bg-gray-100 text-gray-800"
                    }`}
                    >
                    <p className="text-sm font-medium">{msg.sender}</p>
                    <p className="text-base">{msg.message}</p>
                    <p className="text-xs text-gray-500 text-right">
                        {new Date(msg.timestamp).toLocaleTimeString()}
                    </p>
                    </div>
                </div>
            ))}

            </div>

            <div className="flex items-center gap-2">
                <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Type your message..."
                />
                <button
                onClick={sendMessage}
                className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
                >
                Send
                </button>
            </div>
        </div>

    );
};

export default Messages;
