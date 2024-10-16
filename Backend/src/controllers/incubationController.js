

const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

// Apply for Incubation Center
const applyForIncubation = async (req, res) => {
  try {
    // Extract JWT token from the request header
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    // Verify and extract user details from JWT
    let userId;
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      userId = decoded.user_id;
    } catch (err) {
      return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }

    // Extract form data
    const { incubationCenter, status } = req.body;

    if (!incubationCenter || !status) {
      return res.status(400).json({ error: 'Please provide all required fields' });
    }

    // Create an incubation application
    const application = await prisma.incubationApplication.create({
      data: {
        userId: userId,
        incubationCenter: incubationCenter,
        status: status
      }
    });

    return res.status(200).json({
      message: 'Incubation application submitted successfully',
      application
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing the request' });
  }
};

module.exports = {
  applyForIncubation,
};
