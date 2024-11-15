

const express = require('express');
const { userLogin } = require('../controllers/userController');

const router = express.Router();

// POST route for user login
router.post('/', userLogin);

// router.put("/update-twitter", updateTwitter);
// router.put("/update-facebook", updateFacebook);
// router.put("/update-instagram", updateInstagram);
// router.put("/update-website", updateWebsite);
// router.put("/update-moto", updateMoto);
// router.put("/update-about", updateAbout);
// router.get("/startup-details", getStartupDetails);

module.exports = router;
