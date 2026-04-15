const router = require('express').Router();
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require('../controllers/product.controller');
const { protect, authorize } = require('../middleware/auth.middleware');

// Get all products
router.get('/', getProducts);

// Get single product by ID
router.get('/:id', getProductById);

// Create product
router.post('/', protect, authorize('admin'), createProduct);

// Update product
router.patch('/:id', protect, authorize('admin'), updateProduct);

// Delete product
router.delete('/:id', protect, authorize('admin'), deleteProduct);

module.exports = router;
