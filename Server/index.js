const express = require('express');
const cors = require("cors");
const Base = require('./routes/Base')
const RegisterUser = require('./routes/RegisterUser')
const AllUser = require('./routes/AllUsers')
const Login = require('./routes/Login')
const AddProject = require('./routes/AddProject')
const getpostdata = require('./routes/getPostdata')
const cookieParser = require("cookie-parser");
const getpostdatabyid = require('./routes/getpostdatabyid')
const getmyproject = require('./routes/GetMyProject')
const newTeam = require('./routes/newteam')
const SendRequest = require('./routes/SendRequest')
const getrequestbyprojectid = require('./routes/getRequestByProjectId')
const DeleteRequest = require('./routes/DeleteRequest')
const GetUser = require('./routes/GetUser')
const addTask = require('./routes/AddTask')
const FindTaskByProjectId = require('./routes/FindTaskByProjectId')
const counter = require('./model/counter')


const port = 3000
const app = express();
require('dotenv').config();

// middleware
app.use(cors({ 
  origin: "http://localhost:5173",
  credentials: true, 
}));
app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB 
require("./db/conn");

const count = async() => {
  try {
    const cnt = await counter.findOne();
    console.log(cnt);
    if(cnt === null || cnt.length === 0){
      const count = new counter();
      await count.save();
    }
    else{
      let n = cnt.Count;
      n++;
      await counter.updateOne({Count: n});
    } 
    return;
  } catch (error) {
    console.error(error.message);
    return;
  }
}


//user routes
app.use('', Base); // base page
app.use('/api', RegisterUser) // to register new user
app.use('/api', AllUser) //to show details of all user
app.use('/api', Login) //to login the user
app.use('/api', AddProject) // to create a new project post
app.use('/api', getpostdata) // to get all post data
app.use('/api', getpostdatabyid) // to get post data by id
app.use('/api', getmyproject) // get projects you are working in
app.use('/api', SendRequest) // send join request to project
app.use('/api', getrequestbyprojectid) // get request list of specific project id
app.use('/api', newTeam) //add member to team
app.use('/api', DeleteRequest) // delete request from request schema
app.use('/api', GetUser) // get data of a perticular user
app.use('/api', addTask) //add task to a project
app.use('/api', FindTaskByProjectId) //find task by project id





// Start the server
app.listen(port, "0.0.0.0" ,() => {
    console.log(`Server running at http://0.0.0.0:${port}`);
  });
// first push
