const express = require('express');
const {
    getProductsController,
    getIndexController,
    getCartController,
    getCheckoutController,
    getProductController,
    addToCartController,
} = require('../controllers/shop');

const router = express.Router();

// / => GET
router.get('/', getIndexController);

// /products => GET
router.get('/products', getProductsController);

// /cart => GET
router.get('/cart', getCartController);

// /cart => POST
router.post('/cart', addToCartController);

// /checkout => GET
router.get('/checkout', getCheckoutController);

// /product/:id => GET
router.get('/product/:id', getProductController);

module.exports = router;
