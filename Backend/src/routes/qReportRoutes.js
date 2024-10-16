

// routes/reportRoutes.js
const express = require('express');
const router = express.Router();
const reportController = require('../controllers/qReportController');
const { authenticateUser } = require('../middlewares/authenticateUser');

// POST route for submitting the quarterly report
router.post('/',authenticateUser, reportController.submitQuarterlyReport);

module.exports = router;
