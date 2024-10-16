

const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key'; // Use environment variable

const applyForCoWorkingSpace = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]; // Extract token from headers

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

    const { coworkingCenter, seatNo, status } = req.body;

    if (!coworkingCenter || !seatNo || !status) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const application = await prisma.coWorkingApplication.upsert({
      where: { userId },
      update: {
        coworkingCenter,
        seatNo,
        status,
      },
      create: {
        coworkingCenter,
        seatNo,
        status,
        userId,
      },
    });

    return res.status(200).json({
      message: 'Application submitted successfully',
      application,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while submitting the application' });
  }
};

module.exports = {
  applyForCoWorkingSpace,
};
