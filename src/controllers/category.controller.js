// Import Category model
const { Category } = require('../models');

// Create a new category
exports.createCategory = async (req, res) => {
  try {
    // Extract data from request body
    const { name, description } = req.body;

    // Create category in DB
    const category = await Category.create({
      name,
      description,
    });

    // Return success response
    return res.status(201).json({
      success: true,
      data: category,
    });
  } catch (error) {
    // Handle errors
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all categories
exports.getCategories = async (req, res) => {
  try {
    // Fetch categories sorted by newest
    const categories = await Category.findAll({
      order: [['createdAt', 'DESC']],
    });

    return res.status(200).json({
      success: true,
      data: categories,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
