console.log("index router is called");
//this file link all the routes to the index bia router of express.
const express = require('express');
const router = express.Router();

const homeControler = require('../controlers/home_controler');// import the contorller

router.get('/',homeControler.home);  // setting the path for / req
router.use('/admin',require('./testAdmin'));
router.use('/student',require('./student'));

module.exports = router; // exporting the router.