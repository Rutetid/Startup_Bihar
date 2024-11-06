


const express = require('express');

const { uploadDocuments,getDocumentById,getAllDocumentsWithUserDetails} = require('../controllers/documentController');
const { authenticateUser } = require('../middlewares/authenticateUser'); // Import JWT middleware
const { authenticateAdmin } = require('../middlewares/authenticateAdmin');
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
  '/v1/:id',authenticateAdmin,
  getDocumentById
)

router.get(
  '/v2',authenticateAdmin,
  getAllDocumentsWithUserDetails
)


module.exports = router;
