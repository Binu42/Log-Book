require('dotenv').config();
const express = require('express');
const app = express();

// Init middleware
app.use(express.json({ extended: false }));
// Database connection
const connectDB = require('./config/connectDB');
connectDB();

// routes api's
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
})