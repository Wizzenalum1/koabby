/*  it will route to following functionalities
        1. take to home page
        2. route to dashboard, questions,tests and etc.
        
    ALL OF IT WITH AUTHORIZATION.

*/
console.log("index router is called");
//this file link all the routes to the index bia router of express.
const express = require('express');
const router = express.Router();

const homeControler = require('../controllers/home_controller');// import the contorller

router.get('/',homeControler.home);  // setting the path for / req
router.use('/',require('./dashbord_route'));
router.use('/question',require('./question_route'));
router.use('/test',require('./test_route'));
router.use('/response',require('./response_route'));
// TODO signin singup route addition

module.exports = router; // exporting the router.