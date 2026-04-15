const { DataTypes } = require('sequelize');

// Export a function that defines the User model
module.exports = (sequelize) => {
  // Define the "User" table structure
  const User = sequelize.define(
    'User',
    {
      // Primary key using UUID
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Auto-generate UUID
        primaryKey: true,
      },
      

      // User's first name (required)
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      // User's last name (required)
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      // Email must be unique and valid format
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Prevent duplicate emails
        validate: {
          isEmail: true, // Built-in Sequelize validator
        },
      },

      // Hashed password (never store plain text)
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      // Role determines access control
      role: {
        type: DataTypes.ENUM('customer', 'admin'),
        allowNull: false,
        defaultValue: 'customer', // Default role
      },
    },
    {
      tableName: 'users', // Explicit table name
      timestamps: true, // Adds createdAt & updatedAt
    },
  );

  return User;
};
