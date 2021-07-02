const express = require('express');

const router = express.Router();
const testAdminController = require('../controlers/test_admin_controler')


router.get('/question-form',testAdminController.questionForm);
router.get('/',testAdminController.adminDashboard);
router.get('/test-creation-form',testAdminController.testCreationForm);
router.post('/create-question',testAdminController.createQuestion);
router.post('/create-test',testAdminController.createTest);

module.exports = router;
