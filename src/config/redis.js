const { createClient } = require('redis');

// Create Redis client
const redisClient = createClient({
  socket: {
    host: process.env.REDIS_HOST, // Redis host
    port: Number(process.env.REDIS_PORT), // Redis port
  },
});

// Handle Redis errors
redisClient.on('error', (err) => {
  console.error('Redis error:', err.message);
});

// Function to connect to Redis
const connectRedis = async () => {
  try {
    await redisClient.connect(); // Connect to Redis server
    console.log('Redis connected successfully');
  } catch (error) {
    console.error('Redis connection failed:', error.message);
    process.exit(1); // Exit if Redis fails
  }
};

// Export Redis client and connection function
module.exports = {
  redisClient,
  connectRedis,
};
