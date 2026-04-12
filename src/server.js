require('dotenv').config();
const app = require('./app');
const { connectDB } = require('./config/db');
const { connectRedis } = require('./config/redis');

// Set server port
const PORT = process.env.PORT || 5000;

// Run the server
(async () => {
  try {
    // Connect to PostgreSQL
    await connectDB();

    // Connect to Redis
    await connectRedis();

    // Start Express server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Server startup failed:', error.message);
    process.exit(1); // Exit if startup fails
  }
})();
