/*  it will have controllers to following functionalities
        1. show test attemp form
        2. create responce
        3. show test responce
    ALL OF IT WITH AUTHORIZATION.
*/
require('./index');
// delete above require
const express = require('express');
const router = express.Router();

const responseController = require('../controllers/response_controller');
// /response/
router.get('/creation-form', responseController.creationForm);
router.get('/show', responseController.show);
router.post('/create', responseController.create);

module.exports = router;