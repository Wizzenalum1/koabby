/*  it will route to following functionalities
        1. show test creation form
        2. create test 
        3. update test
        4. delete test
    ALL OF IT WITH AUTHORIZATION.

*/

require('./index')
// delete all require above me
const express = require('express');
const multer = require('multer');
const upload = multer({dest:'assets/image/questions'})

const router = express.Router();
const testController = require('../controllers/test_controller');
// from /test
router.get('/creation-form',testController.creationForm); 
router.post('/create',testController.create);

module.exports = router;
