const express = require('express');
const cors = require("cors");
const Base = require('./routes/Base')
const RegisterUser = require('./routes/RegisterUser')
const AllUser = require('./routes/AllUsers')

const port = 3000
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB 
require("./db/conn");


//user routes
app.use('', Base);
app.use('/api', RegisterUser)
app.use('/api',AllUser)


// Start the server
app.listen(port, "0.0.0.0" ,() => {
    console.log(`Server running at http://0.0.0.0:${port}`);
  });

