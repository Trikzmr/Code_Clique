const express = require('express');
const cors = require("cors");
const http = require("http"); // Import http module
const { Server } = require("socket.io"); // Import socket.io
const cookieParser = require("cookie-parser");
require('dotenv').config();

// Import Routes
const Base = require('./routes/Base');
const RegisterUser = require('./routes/RegisterUser');
const AllUser = require('./routes/AllUsers');
const Login = require('./routes/Login');
const AddProject = require('./routes/AddProject');
const getpostdata = require('./routes/getPostdata');
const getpostdatabyid = require('./routes/getpostdatabyid');
const getmyproject = require('./routes/GetMyProject');
const newTeam = require('./routes/newteam');
const SendRequest = require('./routes/SendRequest');
const getrequestbyprojectid = require('./routes/getRequestByProjectId');
const DeleteRequest = require('./routes/DeleteRequest');
const GetUser = require('./routes/GetUser');
const addTask = require('./routes/AddTask');
const FindTaskByProjectId = require('./routes/FindTaskByProjectId');
const counter = require('./model/counter');
const AssignMembers = require('./routes/AssignMembers');
const FindTaskByTaskId = require('./routes/FindTaskByTaskId');
const changetaskstatus = require('./routes/ChangeTaskStatus');
const deleteTask = require('./routes/DeleteTaskById');
const getmytask = require('./routes/getMyTask');
const Message = require("./model/Messages");
const messageapi = require("./routes/Messageapi");
const updatetask = require("./routes/UpdateTask");
const updateUser = require("./routes/UpdateUser");
const userDetails = require("./routes/UserDetail");
const ViewAdder = require("./routes/ViewAdder");
const postPreviewbyid = require("./routes/postpreviewbyid")
const UploadProfilePic = require("./routes/UploadProfilePic")
const getProfilePic = require("./routes/GetProfilePic");

// Initialize Express app
const app = express();
const port = 3000;

// Create HTTP server for socket.io 
const server = http.createServer(app);

// Middleware
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174", "https://code-clique-9qgm.vercel.app", "https://code-clique-2mtm.vercel.app", "http://localhost:5173"],
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// MongoDB Connection
require("./db/conn");


// Import and initialize Socket.IO
const initSocket = require("./Socket/MessageHandler");
initSocket(server); // Pass the server to socket.js


// Routes
app.use('', Base);
app.use('/api', RegisterUser);
app.use('/api', AllUser);
app.use('/api', Login);
app.use('/api', AddProject);
app.use('/api', getpostdata);
app.use('/api', getpostdatabyid); //auth done 
app.use('/api', getmyproject);
app.use('/api', SendRequest);
app.use('/api', getrequestbyprojectid);
app.use('/api', newTeam);
app.use('/api', DeleteRequest);
app.use('/api', GetUser);
app.use('/api', addTask);
app.use('/api', FindTaskByProjectId);
app.use('/api', AssignMembers);
app.use('/api', FindTaskByTaskId);
app.use('/api', changetaskstatus);
app.use('/api', deleteTask);
app.use('/api', getmytask);
app.use('/api', messageapi);
app.use('/api', updatetask);
app.use('/api', updateUser);
app.use('/api', userDetails);
app.use('/api', ViewAdder);
app.use('/api', postPreviewbyid);
app.use('/api', UploadProfilePic);
app.use('/api', getProfilePic);

// Start the server with socket.io
server.listen(port, "0.0.0.0", () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});

