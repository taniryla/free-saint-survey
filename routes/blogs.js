const express = require('express');
const router = express.Router();
const blogssCtrl = require('../controllers/blogs');

// This router is mounted to a "starts with" path of '/'