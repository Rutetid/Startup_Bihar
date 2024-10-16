

const express = require('express');
const { applyForCoWorkingSpace } = require('../controllers/coWorkingApplicationController');
const router = express.Router();

const { authenticateUser } = require('../middlewares/authenticateUser'); 

router.post('/',authenticateUser, applyForCoWorkingSpace);

module.exports = router;
