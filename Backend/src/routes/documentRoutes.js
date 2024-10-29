

/*
const express = require('express');

const { uploadDocuments,getAllDocumentsWithUserInfo,getStartupFormByUserId } = require('../controllers/documentController');
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

router.get('/s1', getAllDocumentsWithUserInfo);

router.post('/s2',getStartupFormByUserId);

module.exports = router;

*/
/*
const express = require('express');
const { uploadDocuments, getAllDocumentsWithUserInfo, getStartupFormByUserId } = require('../controllers/documentController');
const { authenticateUser } = require('../middlewares/authenticateUser'); 
const upload = require('../config/multerconfig');

const router = express.Router();

// Route for document uploads with JWT authentication
router.post(
  '/',
  authenticateUser,
  upload.fields([{ name: 'logo' }, { name: 'certificate' }]),
  uploadDocuments
);

// Route to get all documents with user information
router.get('/list', getAllDocumentsWithUserInfo);

// Route to get a specific startup form by user ID
router.get('/startuplist/:user_id', getStartupFormByUserId);

module.exports = router;

*/


const express = require('express');
const { uploadDocuments, getAllDocumentsWithUserInfo, getStartupFormByUserId } = require('../controllers/documentController');
const { authenticateUser } = require('../middlewares/authenticateUser');
const upload = require('../config/multerconfig');

const router = express.Router();

// Route for document uploads with JWT authentication
router.post(
  '/',
  authenticateUser,
  upload.fields([{ name: 'logo' }, { name: 'certificate' }]),
  uploadDocuments
);

// Route to get all documents with user information
router.get('/list', getAllDocumentsWithUserInfo);

// Route to get a specific startup form by user ID
router.get('/startuplist', getStartupFormByUserId);

module.exports = router;
