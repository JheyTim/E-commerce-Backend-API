// Import Sequelize data types
const { DataTypes } = require('sequelize');

// Export a function that defines the Product model
module.exports = (sequelize) => {
  const Product = sequelize.define(
    'Product',
    {
      // Primary key (UUID)
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      // Product name (required)
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      // Optional description
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      // Product price (required, decimal)
      price: {
        type: DataTypes.DECIMAL(10, 2), // max 10 digits, 2 decimal places
        allowNull: false,
      },

      // Stock quantity
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },

      // Active status
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: 'products',
      timestamps: true,
    },
  );

  return Product;
};
