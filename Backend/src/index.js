/*
const express = require('express');
const cors = require('cors');

const documentRoutes = require('./routes/documentRoutes');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const seedFundRoutes = require('./routes/seedFundRoutes');
const secondTrancheRoutes = require('./routes/secondTrancheRoutes')
const postSeedFundRoutes = require('./routes/postSeedFundRoutes');
const qReportRoutes = require('./routes/qReportRoutes')
const accelerationRoutes = require('./routes/accelerationRoutes')
const matchingLoanRoutes = require('./routes/matchingLoanRoutes')
const incubationRoutes = require('./routes/incubationRoutes')
const coWorkingApplicationRoutes = require('./routes/coWorkingApplicationRoutes')
const iprReimbursementRoutes = require('./routes/iprReimbursementRoutes')


const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/userlogin', userRoutes);
app.use('/api/adminlogin', adminRoutes);

// all the user side forms
app.use('/api/StartupProfile', documentRoutes);
app.use('/api/seed-fund', seedFundRoutes);
app.use('/api/second-tranche', secondTrancheRoutes);
app.use('/api/post-seed', postSeedFundRoutes);
app.use('/api/Qreport', qReportRoutes);
app.use('/api/acceleration', accelerationRoutes);
app.use('/api/matchingLoan', matchingLoanRoutes);
app.use('/api/incubation', incubationRoutes);
app.use('/api/coworking', coWorkingApplicationRoutes);
app.use('/api/iprReimbursement', iprReimbursementRoutes);







// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
*/

const express = require('express');
const cors = require('cors');

const documentRoutes = require('./routes/documentRoutes');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const seedFundRoutes = require('./routes/seedFundRoutes');
const secondTrancheRoutes = require('./routes/secondTrancheRoutes');
const postSeedFundRoutes = require('./routes/postSeedFundRoutes');
const qReportRoutes = require('./routes/qReportRoutes');
const accelerationRoutes = require('./routes/accelerationRoutes');
const matchingLoanRoutes = require('./routes/matchingLoanRoutes');
const incubationRoutes = require('./routes/incubationRoutes');
const coWorkingApplicationRoutes = require('./routes/coWorkingApplicationRoutes');
const iprReimbursementRoutes = require('./routes/iprReimbursementRoutes');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Authentication routes
app.use('/api/userlogin', userRoutes);
app.use('/api/adminlogin', adminRoutes);

// User-side forms and document routes
app.use('/api/startupProfile', documentRoutes);
app.use('/api/seed-fund', seedFundRoutes);
app.use('/api/second-tranche', secondTrancheRoutes);
app.use('/api/post-seed', postSeedFundRoutes);
app.use('/api/q-report', qReportRoutes);
app.use('/api/acceleration', accelerationRoutes);
app.use('/api/matching-loan', matchingLoanRoutes);
app.use('/api/incubation', incubationRoutes);
app.use('/api/coworking', coWorkingApplicationRoutes);
app.use('/api/ipr-reimbursement', iprReimbursementRoutes);





// user side api   get routes
/*
    http://localhost:3000/api/startupProfile/list ----------> get list of userid and Reg no for startups who have filled startup form
    http://localhost:3000/api/startupProfile/startuplist-------->send user_id in body to get its particular startup form

*/




// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
