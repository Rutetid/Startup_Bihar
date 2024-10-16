


const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key'; // Use environment variable

const applyForIPRReimbursement = async (req, res) => {
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

    const {
      iprType,
      feePaidForApplicationForm,
      consultancyFee,
    } = req.body;

    if (!iprType || !feePaidForApplicationForm) {
      return res.status(400).json({ error: 'Required fields are missing' });
    }

    const iprCertificateFile = req.files?.iprCertificate?.[0];
    const feePaidInvoiceFile = req.files?.feePaidInvoice?.[0];
    const consultancyInvoiceFile = req.files?.consultancyInvoice?.[0];

    if (!iprCertificateFile || !feePaidInvoiceFile) {
      return res.status(400).json({ error: 'IPR Certificate and Invoice files are required' });
    }

    const application = await prisma.iPRReimbursement.upsert({
      where: { userId },
      update: {
        iprType,
        feePaidForApplicationForm,
        consultancyFee,
        iprCertificateFileName: iprCertificateFile.filename,
        iprCertificateFilePath: iprCertificateFile.path,
        feePaidInvoiceFileName: feePaidInvoiceFile.filename,
        feePaidInvoiceFilePath: feePaidInvoiceFile.path,
        consultancyInvoiceFileName: consultancyInvoiceFile?.filename || null,
        consultancyInvoiceFilePath: consultancyInvoiceFile?.path || null,
      },
      create: {
        iprType,
        feePaidForApplicationForm,
        consultancyFee,
        iprCertificateFileName: iprCertificateFile.filename,
        iprCertificateFilePath: iprCertificateFile.path,
        feePaidInvoiceFileName: feePaidInvoiceFile.filename,
        feePaidInvoiceFilePath: feePaidInvoiceFile.path,
        consultancyInvoiceFileName: consultancyInvoiceFile?.filename || null,
        consultancyInvoiceFilePath: consultancyInvoiceFile?.path || null,
        userId,
      },
    });

    return res.status(200).json({
      message: 'IPR Reimbursement application submitted successfully',
      application,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing the application' });
  }
};

module.exports = {
  applyForIPRReimbursement,
};
