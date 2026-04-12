const express = require('express');
const {
  createCategory,
  getCategories,
} = require('../controllers/category.controller');

const router = express.Router();

// POST /categories → create category
router.post('/', createCategory);

// GET /categories → get all categories
router.get('/', getCategories);

module.exports = router;
