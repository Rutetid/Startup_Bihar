
/*
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



const getAllDocumentsWithUserInfo = async (req, res) => {
  try {
    // Fetch user_id and registrationNo for all documents
    const documents = await prisma.document.findMany({
      select: {
        userId: true,
        registrationNo: true
      }
    });

    return res.status(200).json({ documents });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching documents' });
  }
};



const getStartupFormByUserId = async (req, res) => {
  const { user_id } = req.body;

  try {
    // Find the document by user_id
    const document = await prisma.document.findUnique({
      where: {
        userId: user_id,
      },
      include: {
        user: {  // Include user details if needed
          select: {
            company_name: true,
            registration_no: true
          }
        }
      }
    });

    if (!document) {
      return res.status(404).json({ error: 'Document not found for the given user ID' });
    }

    // Return the document data and associated user data
    return res.status(200).json({
      userId: document.userId,
      registrationNo: document.registrationNo,
      founderName: document.founderName,
      founderAadharNumber: document.founderAadharNumber,
      coFounderNames: document.coFounderNames,
      coFounderAadharNumbers: document.coFounderAadharNumbers,
      sector: document.sector,
      businessConcept: document.businessConcept,
      mobileNumbers: document.mobileNumbers,
      email: document.email,
      websiteLink: document.websiteLink,
      category: document.category,
      gender: document.gender,
      dpiitRecognitionNo: document.dpiitRecognitionNo,
      appliedIPR: document.appliedIPR,
      isCertVerified: document.isCertVerified,
      isFounderDetailsVerified: document.isFounderDetailsVerified,
      isCoFounderDetailsVerified: document.isCoFounderDetailsVerified,
      isMobileNumbersVerified: document.isMobileNumbersVerified,
      isEmailVerified: document.isEmailVerified,
      isDpiitRecognitionNoVerified: document.isDpiitRecognitionNoVerified,
      logoName: document.logoName,
      logoPath: document.logoPath,
      certName: document.certName,
      certPath: document.certPath,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while retrieving the startup form' });
  }
};




module.exports = {
  uploadDocuments,
  getAllDocumentsWithUserInfo,
  getStartupFormByUserId
};

*/


const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken'); // Import the jsonwebtoken library
const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key'; // Use environment variable

// Upload documents function
const uploadDocuments = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]; // Extract the token

    // Verify JWT and extract user ID
    if (!token) return res.status(401).json({ error: 'Unauthorized: No token provided' });

    let userId;
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      userId = decoded.user_id; // Assuming the JWT payload has "user_id"
    } catch (err) {
      return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }

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
      appliedIPR: req.body.appliedIPR === 'true',
    };

    if (req.files) {
      if (req.files.logo && req.files.logo.length > 0) {
        const logoFile = req.files.logo[0];
        newDocumentData.logoName = logoFile.filename;
        newDocumentData.logoPath = logoFile.path;
      }

      if (req.files.certificate && req.files.certificate.length > 0) {
        const certificateFile = req.files.certificate[0];
        newDocumentData.certName = certificateFile.filename;
        newDocumentData.certPath = certificateFile.path;
      }
    }

    const document = await prisma.document.upsert({
      where: { userId },
      update: { ...newDocumentData },
      create: {
        ...newDocumentData,
        userId,
        isCertVerified: "pending",
        isFounderDetailsVerified: "pending",
        isCoFounderDetailsVerified: "pending",
        isMobileNumbersVerified: "pending",
        isEmailVerified: "pending",
        isDpiitRecognitionNoVerified: "pending",
      },
    });

    return res.status(200).json({
      message: document ? 'Document updated successfully' : 'Document created successfully',
      document,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing the request' });
  }
};

// Get all documents with user info
const getAllDocumentsWithUserInfo = async (req, res) => {
  try {
    const documents = await prisma.document.findMany({
      select: {
        userId: true,
        registrationNo: true
      }
    });
    return res.status(200).json({ documents });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching documents' });
  }
};

// Get startup form by user ID
const getStartupFormByUserId = async (req, res) => {
  const { user_id } = req.body;

  // Log user_id for debugging
  console.log("Received user_id:", user_id);

  try {
    const document = await prisma.document.findUnique({
      where: { userId: user_id.toString() }, // Convert to string if necessary
      select: {
        logoName: true,
        logoPath: true,
        certName: true,
        certPath: true,
        registrationNo: true,
        founderName: true,
        founderAadharNumber: true,
        coFounderNames: true,
        coFounderAadharNumbers: true,
        sector: true,
        businessConcept: true,
        mobileNumbers: true,
        email: true,
        websiteLink: true,
        category: true,
        gender: true,
        dpiitRecognitionNo: true,
        appliedIPR: true,
      }
    });

    if (!document) {
      console.log("No document found for user_id:", user_id); // Log for debugging
      return res.status(404).json({ error: 'Document not found for the given user ID' });
    }

    return res.status(200).json(document);
  } catch (error) {
    console.error("Error retrieving startup form:", error);
    res.status(500).json({ error: 'An error occurred while retrieving the startup form' });
  }
};


module.exports = {
  uploadDocuments,
  getAllDocumentsWithUserInfo,
  getStartupFormByUserId
};
