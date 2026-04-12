const express = require('express');
const healthRoutes = require('./routes/health.routes');

const app = express();

app.use(express.json());

app.use('/api/v1/health', healthRoutes);

app.use((_req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

module.exports = app;
