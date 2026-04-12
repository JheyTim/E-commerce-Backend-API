const { Sequelize } = require('sequelize');

// Create Sequelize instance using environment variables
const sequelize = new Sequelize(
  process.env.DB_NAME, // Database name
  process.env.DB_USER, // Database user
  process.env.DB_PASSWORD, // Database password
  {
    host: process.env.DB_HOST, // Database host
    port: Number(process.env.DB_PORT), // Database port
    dialect: 'postgres', // Database type
    logging: false, // Disable SQL logs
  },
);

// Function to connect to the database
const connectDB = async () => {
  try {
    // Test database connection
    await sequelize.authenticate();
    console.log('PostgreSQL connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1); // Exit app if DB fails
  }
};

// Export Sequelize instance and connection function
module.exports = {
  sequelize,
  connectDB,
};
