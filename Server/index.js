const express = require('express');
const cors = require("cors");
const Base = require('./routes/Base')
const RegisterUser = require('./routes/RegisterUser')
const AllUser = require('./routes/AllUsers')
const Login = require('./routes/Login')
const postData = require('./routes/postData')
const getdata = require('./routes/getdata')
const idpostget = require('./routes/idpostget')

const port = 3000
const app = express();
require('dotenv').config();

// middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB 
require("./db/conn");


//user routes
app.use('', Base);
app.use('/api', RegisterUser)
app.use('/api',AllUser)
app.use('/api', Login)
app.use('/api', postData)
app.use('/api',getdata)
app.use('/api',idpostget)


// Start the server
app.listen(port, "0.0.0.0" ,() => {
    console.log(`Server running at http://0.0.0.0:${port}`);
  });
// first push
