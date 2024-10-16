

const express = require('express');
const { applyForIPRReimbursement } = require('../controllers/iprReimbursementController');
const upload = require('../config/multerconfig'); // Use the multer config for file uploads
const { authenticateUser } = require('../middlewares/authenticateUser'); 
const router = express.Router();

// Define the route with file uploads
router.post('/',authenticateUser, upload.fields([
  { name: 'iprCertificate', maxCount: 1 },
  { name: 'feePaidInvoice', maxCount: 1 },
  { name: 'consultancyInvoice', maxCount: 1 }
]), applyForIPRReimbursement);

module.exports = router;
