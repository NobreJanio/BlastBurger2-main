import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Get the JWT_SECRET from environment variables
const secret = process.env.JWT_SECRET;

// Create a payload for the token
const payload = {
  id: 1,
  name: 'Admin',
  admin: true
};

// Generate the token
const token = jwt.sign(payload, secret, {
  expiresIn: '7d'
});

// Output the token
console.log('Generated token:');
console.log(token);