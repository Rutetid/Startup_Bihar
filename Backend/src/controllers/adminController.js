

const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();
const JWT_SECRET = 'your'; // Store securely in env vars

// Admin login controller
const adminLogin = async (req, res) => {
  try {
    const { admin_id, password } = req.body;

    // Check if admin_id and password are provided
    if (!admin_id || !password) {
      return res.status(400).json({ error: 'admin_id and password are required' });
    }

    // Find admin by admin_id
    const admin = await prisma.admin.findUnique({
      where: { admin_id },
    });

    // If admin doesn't exist, return an error
    if (!admin) {
      return res.status(404).json({ error: 'Admin not found' });
    }

if (password != admin.password) {
    return res.status(401).json({ error: 'Invalid password' });
  }

    // Generate JWT token
    const token = jwt.sign(
      { admin_id: admin.admin_id },
      JWT_SECRET,
      { expiresIn: '1h' } // Token expires in 1 hour
    );

    // Return the token
    res.status(200).json({
      message: 'Admin login successful',
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while logging in' });
  }
};

module.exports = {
  adminLogin,
};
