// Import Sequelize data types
const { DataTypes } = require('sequelize');

// Export a function that defines the Category model
module.exports = (sequelize) => {
  // Define the Category model
  const Category = sequelize.define(
    'Category',
    {
      // Primary key (UUID)
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Auto-generate UUID
        primaryKey: true,
      },

      // Category name (required & unique)
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      // Optional description
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      tableName: 'categories', // Explicit table name
      timestamps: true, // Adds createdAt & updatedAt
    },
  );

  return Category;
};
