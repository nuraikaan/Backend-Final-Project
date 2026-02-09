const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const ctrl = require('../controllers/productController');
const admin = require('../middleware/adminMiddleware');

router.get('/', ctrl.getAllProducts);
router.post('/', auth, admin, ctrl.createProduct);
router.put('/:id', auth, admin, ctrl.updateProduct);
router.delete('/:id', auth, admin, ctrl.deleteProduct);

module.exports = router;

