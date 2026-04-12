require('dotenv').config();
const app = require('./app');
const { connectDB } = require('./config/db');
const { connectRedis } = require('./config/redis');
const { sequelize } = require('./models');

// Set server port
const PORT = process.env.PORT || 5000;

// Run the server
(async () => {
  try {
    // Connect to PostgreSQL
    await connectDB();

    // Connect to Redis
    await connectRedis();

    // Sync models to database (auto-create tables)
    await sequelize.sync({ alter: true });
    console.log('Database synchronized');

    // Start Express server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Server startup failed:', error.message);
    process.exit(1); // Exit if startup fails
  }
})();
