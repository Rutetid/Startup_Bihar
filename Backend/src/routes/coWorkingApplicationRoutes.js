

const express = require('express');
const { applyForCoWorkingSpace,getAllCoworkingWithUserDetails,getcoworkingById } = require('../controllers/coWorkingApplicationController');
const router = express.Router();

const { authenticateUser } = require('../middlewares/authenticateUser'); 
const { authenticateAdmin } = require('../middlewares/authenticateAdmin'); 

router.post('/',authenticateUser, applyForCoWorkingSpace);

router.get('/v2',authenticateAdmin, getAllCoworkingWithUserDetails);

router.get('/v1/:id',authenticateAdmin, getcoworkingById);

module.exports = router
