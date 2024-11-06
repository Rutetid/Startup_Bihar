

const express = require('express');
const { applyForIPRReimbursement,getIprnById,getAllIprnWithUserDetails } = require('../controllers/iprReimbursementController');
const upload = require('../config/multerconfig'); // Use the multer config for file uploads
const { authenticateUser } = require('../middlewares/authenticateUser'); 
const { authenticateAdmin } = require('../middlewares/authenticateAdmin'); 
const router = express.Router();

// Define the route with file uploads
router.post('/',authenticateUser, upload.fields([
  { name: 'iprCertificate', maxCount: 1 },
  { name: 'feePaidInvoice', maxCount: 1 },
  { name: 'consultancyInvoice', maxCount: 1 }
]), applyForIPRReimbursement);


router.get('/v1/:id',authenticateAdmin, getIprnById);


router.get('/v2',authenticateAdmin, getAllIprnWithUserDetails);


module.exports = router;
