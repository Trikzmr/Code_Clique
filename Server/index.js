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
const addmyrequest = require('./routes/addRequest')


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


//user routes
app.use('', Base);
app.use('/api', RegisterUser)
app.use('/api',AllUser)
app.use('/api', Login)
app.use('/api', AddProject)
app.use('/api',getpostdata)
app.use('/api',getpostdatabyid)
app.use('/api',getmyproject)
app.use('/api',addmyrequest)




// Start the server
app.listen(port, "0.0.0.0" ,() => {
    console.log(`Server running at http://0.0.0.0:${port}`);
  });
// first push
