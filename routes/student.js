const express = require('express');
const router = express.Router();
const studentController = require('../controlers/student_controller')


router.get('/',studentController.dashboard);
router.get('/test',studentController.test);
router.post('/test-result',studentController.testResult);

module.exports = router;