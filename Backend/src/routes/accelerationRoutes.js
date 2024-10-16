

const express = require('express');
const router = express.Router();

// Import the controller function
const { applyForAccelerationProgram } = require('../controllers/accelerationController');

const { authenticateUser } = require('../middlewares/authenticateUser');

// Define the POST route for applying for an acceleration program
router.post('/',authenticateUser, applyForAccelerationProgram);

module.exports = router;
