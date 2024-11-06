
const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

const uploadDocuments = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    let userId;
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      userId = decoded.user_id;
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

const getDocumentById = async (req, res) => {
  let { id } = req.params; // Retrieve id from the request parameters

  try {
  
    // Check if id is provided
    if (!id) {
      return res.status(400).json({ error: 'ID is required' });
    }

    // Fetch the document from the database
    const document = await prisma.document.findUnique({
      where: { id: id }, // Use the ID to query the database
    });

    if (!document) {
      // Return 404 if document is not found
      return res.status(404).json({ error: 'Document not found' });
    }

    // Return the document if found
    return res.status(200).json(document); // Explicitly set status to 200
  } catch (error) {
    // Handle any server error
    console.error(`Error retrieving document with id ${id}:`, error);
    return res.status(500).json({ error: 'An error occurred while retrieving the document' });
  }
};


const getAllDocumentsWithUserDetails = async (req, res) => {
  try {
    const documents = await prisma.document.findMany({
      select: {
        id: true,
        coFounderNames: true,
        logoPath: true,
        category:true,
         // Only select coFounderNames from Document
        user: {
          select: {
            user_id: true,          // Include other fields from User as needed
            registration_no: true,  // Example field; adjust as necessary
            company_name:true
            // Add more fields if needed, but exclude `password`
          },
        },
      },
    });

    return res.status(200).json({
      message: 'Documents with user details retrieved successfully',
      documents,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching documents' });
  }
};


module.exports = {
  uploadDocuments,
  getDocumentById,
  getAllDocumentsWithUserDetails,
};
