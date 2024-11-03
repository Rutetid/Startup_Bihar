

const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken'); // Import the jsonwebtoken library
const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key'; // Use environment variable


const uploadDocuments = async (req, res) => {
  try {
    // Extract the JWT from the request headers
    const token = req.headers.authorization?.split(' ')[1]; // Assuming the token is in the format "Bearer <token>"

    // Verify and decode the JWT to get the user ID
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    let userId;
    try {
      const decoded = jwt.verify(token, JWT_SECRET); // Use your secret key
      userId = decoded.user_id; // Assuming the JWT payload contains the user ID as "user_id"
    } catch (err) {
      return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }

    // Prepare data to create or update a document
    const newDocumentData = {
      registrationNo: req.body.registrationNo,
      founderName: req.body.founderName,
      founderAadharNumber: req.body.founderAadharNumber,
      coFounderNames: req.body.coFounderNames ? req.body.coFounderNames.split(',').map(name => name.trim()) : [],
      coFounderAadharNumbers: req.body.coFounderAadharNumbers ? req.body.coFounderAadharNumbers.split(',').map(aadhar => aadhar.trim()) : [],
      sector: req.body.sector,
      businessConcept: req.body.businessConcept,
      mobileNumbers: req.body.mobileNumbers ? req.body.mobileNumbers.split(',').map(num => num.trim()) : [],
      email: req.body.email,
      websiteLink: req.body.websiteLink,
      category: req.body.category,
      gender: req.body.gender,
      dpiitRecognitionNo: req.body.dpiitRecognitionNo,
      appliedIPR: req.body.appliedIPR === 'true', // Convert string to boolean
    };

    // Handle file uploads safely
    if (req.files) {
      if (req.files.logo && req.files.logo.length > 0) {
        const logoFile = req.files.logo[0];
        newDocumentData.logoName = logoFile.filename; // Store logo file name
        newDocumentData.logoPath = logoFile.path; // Store logo file path
      }

      if (req.files.certificate && req.files.certificate.length > 0) {
        const certificateFile = req.files.certificate[0];
        newDocumentData.certName = certificateFile.filename; // Store certificate file name
        newDocumentData.certPath = certificateFile.path; // Store certificate file path
      }
    }

    // Upsert: Create or update the document
    const document = await prisma.document.upsert({
      where: { userId }, // Check for existing document by userId
      update: {
        ...newDocumentData,
        // Maintain existing verification status during update
      },
      create: {
        ...newDocumentData,
        userId, // Associate the document with the authenticated user
        // Set verification fields to 'pending' when creating a new document
        isCertVerified: "pending",
        isFounderDetailsVerified: "pending", // Ensure correct field naming
        isCoFounderDetailsVerified: "pending",
        isMobileNumbersVerified: "pending",
        isEmailVerified: "pending",
        isDpiitRecognitionNoVerified: "pending",
      },
    });

    // Return the created or updated document in the response
    return res.status(200).json({
      message: document ? 'Document updated successfully' : 'Document created successfully',
      document,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing the request' });
  }
};




const getAllDocuments = async (req, res) => {
  try {
    // Extract the JWT from the request headers
    const token = req.headers.authorization?.split(' ')[1]; // Assuming the token is in the format "Bearer <token>"

    // Verify and decode the JWT to check if the user is an admin
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    let decodedToken;
    try {
      decodedToken = jwt.verify(token, JWT_SECRET); // Verify the token using the secret key
    } catch (err) {
      return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }

    // Fetch all documents from the database
    const documents = await prisma.document.findMany();

    // Return the documents in the response
    return res.status(200).json({
      message: 'Documents retrieved successfully',
      documents,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while retrieving the documents' });
  }
};


module.exports = {
  uploadDocuments,
  getAllDocuments
};



