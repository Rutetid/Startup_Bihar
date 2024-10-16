

const express = require('express');
const router = express.Router();
const { applyForIncubation } = require('../controllers/incubationController');

const { authenticateUser } = require('../middlewares/authenticateUser');

// Route for applying to an incubation center
router.post('/',authenticateUser, applyForIncubation);

module.exports = router;
