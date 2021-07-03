const express = require('express');
const router = express.Router();
const studentController = require('../controlers/student_controller')


router.get('/',studentController.dashboard);
router.get('/test/',studentController.test);
router.get('/result/',studentController.testResult);
router.post('/create-test-responce/',studentController.createTestResponce);

module.exports = router;