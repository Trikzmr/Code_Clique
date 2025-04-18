const multer = require('multer');
const express = require('express');
const User = require('../model/userModel');
const authenticate = require('../Middleware/Authentication');

const api = express.Router();

