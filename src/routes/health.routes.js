const router = require('express').Router();
const { healthCheck } = require('../controllers/health.controller');

// Define GET / endpoint
router.get('/', healthCheck);

module.exports = router;
