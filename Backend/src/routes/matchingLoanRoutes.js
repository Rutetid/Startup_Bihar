



const express = require('express');
const router = express.Router();

const { applyForMatchingLoan } = require('../controllers/matchingLoanController');

const { authenticateUser } = require('../middlewares/authenticateUser');  // Import JWT middleware
const upload = require('../config/multerconfig');

// Define the POST route for applying for a matching loan
router.post(
  '/',authenticateUser,
  upload.fields([
    { name: 'proofOfInvestment', maxCount: 1 },
    { name: 'accountStatement', maxCount: 1 },
    { name: 'investorUndertaking', maxCount: 1 },
    { name: 'equityDilutionProof', maxCount: 1 },
    { name: 'utilizationPlan', maxCount: 1 },
    { name: 'boardResolution', maxCount: 1 }
  ]), // Handle multiple file fields
  applyForMatchingLoan
);

module.exports = router;
