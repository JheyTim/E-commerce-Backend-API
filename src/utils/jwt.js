const jwt = require('jsonwebtoken');

// Function to generate a JWT token
exports.signToken = (payload) => {
  return jwt.sign(
    payload,
    process.env.JWT_SECRET, // Secret key from env
    {
      expiresIn: process.env.JWT_EXPIRES_IN || "1d", // Token expiry
    }
  );
};

// Function to verify a JWT token
exports.verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};