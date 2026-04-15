const router = require('express').Router();
const {
  createCategory,
  getCategories,
} = require('../controllers/category.controller');

// POST /categories → create category
router.post('/', createCategory);

// GET /categories → get all categories
router.get('/', getCategories);

module.exports = router;
