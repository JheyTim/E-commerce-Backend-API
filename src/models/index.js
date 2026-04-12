// Import Sequelize instance
const { sequelize } = require('../config/db');

// Import model definitions
const CategoryModel = require('./category.model');
const ProductModel = require('./product.model');

// Initialize models
const Category = CategoryModel(sequelize);
const Product = ProductModel(sequelize);

// =====================
// Model Associations
// =====================

// One Category → Many Products
Category.hasMany(Product, {
  foreignKey: 'categoryId', // Foreign key in Product table
  as: 'products', // Alias for relation
});

// One Product → One Category
Product.belongsTo(Category, {
  foreignKey: 'categoryId',
  as: 'category',
});

// Export everything
module.exports = {
  sequelize,
  Category,
  Product,
};
