const { verifyToken } = require('../utils/jwt');

// Middleware to protect routes (requires login)
exports.protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // Check if Authorization header exists and is valid
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Authorization token missing or invalid',
      });
    }

    // Extract token from header (Bearer <token>)
    const token = authHeader.split(' ')[1];

    // Decode token
    const decoded = verifyToken(token);

    // Attach user info to request object
    req.user = decoded;

    next(); // Continue to next middleware
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized',
    });
  }
};

// Middleware for role-based access control
exports.authorize = (...roles) => {
  return (req, res, next) => {
    // Check if user's role is allowed
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: 'Forbidden: insufficient permissions',
      });
    }

    next();
  };
};
