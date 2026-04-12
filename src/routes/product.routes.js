const express = require('express');
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require('../controllers/product.controller');

const router = express.Router();

// Get all products
router.get('/', getProducts);

// Get single product by ID
router.get('/:id', getProductById);

// Create product
router.post('/', createProduct);

// Update product
router.patch('/:id', updateProduct);

// Delete product
router.delete('/:id', deleteProduct);

module.exports = router;
