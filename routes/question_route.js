/*  it will route to following functionalities
        1. show question form
        2. create question 
        3. update question
        4. delete question
    ALL OF IT WITH AUTHORIZATION.
*/
require('./index')
// delete above me


const express = require('express');
const multer = require('multer');
const upload = multer({dest:'assets/image/questions'})

const router = express.Router();
const questionController = require('../controllers/question_controller')
// /question/
router.get('/creation-form',questionController.creationForm);
router.post('/create',questionController.create);


module.exports = router;
