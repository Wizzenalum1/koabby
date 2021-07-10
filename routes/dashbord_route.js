/*  it will route to following functionalities
        1. show defferent type of users to thier respective dash bords form.
        2. profiles of user.
        3. crud to profile 
    ALL OF IT WITH AUTHORIZATION.

*/
const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboard_controller')


router.get('/student',dashboardController.student);  // /student
router.get('/teacher',dashboardController.teacher);  // /teacher


module.exports = router;