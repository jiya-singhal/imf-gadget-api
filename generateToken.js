const jwt = require('jsonwebtoken');

// Define the payload and secret
const payload = { username: 'admin' }; // Adjust payload as needed
const secret = 'your_jwt_secret';     // Replace with your actual JWT secret
const options = { expiresIn: '1h' };  // Token will expire in 1 hour

// Generate the token
const token = jwt.sign(payload, secret, options);

console.log('Generated Token:', token);
