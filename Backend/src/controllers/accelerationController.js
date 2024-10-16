

const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key'; // Use environment variable

const applyForAccelerationProgram = async (req, res) => {
  try {
    // Extract the JWT from the request headers
    const token = req.headers.authorization?.split(' ')[1];

    // Verify and decode the JWT to get the user ID and userName
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    let userId, userName;
    try {
      const decoded = jwt.verify(token, JWT_SECRET); // Use your secret key
      userId = decoded.user_id;
      userName = decoded.user_name;
    } catch (err) {
      return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }

    // Prepare data for the Acceleration Program
    const programData = {
      hostInstitute: req.body.hostInstitute,
      programName: req.body.programName,
      startDate: new Date(req.body.startDate),
      endDate: new Date(req.body.endDate),
      programWebsite: req.body.programWebsite,
      founderName: req.body.founderName,
      coFounderName: req.body.coFounderName,
      participationFee: parseFloat(req.body.participationFee),
      travelAccommodationCost: parseFloat(req.body.travelAccommodationCost),
      totalPersons: parseInt(req.body.totalPersons, 10),
      totalFee: parseFloat(req.body.totalFee),
      userName // Add the username extracted from the token
    };

    // Upsert: Create or update the acceleration program application
    const accelerationProgram = await prisma.accelerationProgram.upsert({
      where: { userId }, // Check if there's already an application for this user
      update: {
        ...programData
      },
      create: {
        ...programData,
        userId, // Associate the program application with the authenticated user
      },
    });

    // Return the created or updated program application in the response
    return res.status(200).json({
      message: accelerationProgram ? 'Program application updated successfully' : 'Program application created successfully',
      accelerationProgram,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing the request' });
  }
};

module.exports = {
  applyForAccelerationProgram,
};
