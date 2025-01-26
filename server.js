require('dotenv').config();
const express = require('express');
const app = express();
const gadgetsRouter = require('./routes/gadgets');
const authRoutes = require('./routes/auth'); // Import the auth routes

// Middleware to parse JSON bodies
app.use(express.json()); 

// Authentication routes
app.use('/auth', authRoutes); // Add `/auth` as the prefix for authentication routes
app.use('/gadgets', gadgetsRouter); // Gadget routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
