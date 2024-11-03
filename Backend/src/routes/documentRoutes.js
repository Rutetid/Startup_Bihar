


const express = require('express');

const { uploadDocuments,getAllDocuments} = require('../controllers/documentController');
const { authenticateUser } = require('../middlewares/authenticateUser'); // Import JWT middleware
const upload = require('../config/multerconfig');

const router = express.Router();

// Define the route for document uploads with JWT authentication
router.post(
  '/', 
  authenticateUser, // Protect the route with JWT authentication
  upload.fields([{ name: 'logo' }, { name: 'certificate' }]), // Handle file uploads
  uploadDocuments // Controller to handle form and file data
);

router.get(
  '/',authenticateUser,
  getAllDocuments
)

module.exports = router;
