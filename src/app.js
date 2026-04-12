const express = require("express");

// Import health routes
const healthRoutes = require("./routes/health.routes");

// Create Express app instance
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Register health route with base path
app.use("/api/v1/health", healthRoutes);

// Handle unknown routes (404)
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Export app for use in server.js
module.exports = app;