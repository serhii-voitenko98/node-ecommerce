const express = require('express');
const {
    getProductsController,
    getIndexController,
    getCartController,
    getCheckoutController,
} = require('../controllers/shop');

const router = express.Router();

// / => GET
router.get('/', getIndexController);

// /products => GET
router.get('/products', getProductsController);

// /cart => GET
router.get('/cart', getCartController);

// /cart => POST
router.post('/post', getCartController);

// /checkout => GET
router.get('/checkout', getCheckoutController);

module.exports = router;
