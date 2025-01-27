require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const app = express();
const gadgetsRouter = require('./routes/gadgets');
const authRoutes = require('./routes/auth');

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for all origins (customize as needed)
app.use(helmet()); // Security middleware

// Routes
app.use('/auth', authRoutes); // Authentication routes
app.use('/gadgets', gadgetsRouter); // Gadget routes

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on https://imf-gadget-api-1.onrender.com`);
});
