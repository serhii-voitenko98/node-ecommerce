const express = require('express');
const {
    getProductsController,
    getIndexController,
    getCheckoutController,
    getProductController,
} = require('../controllers/shop.controller');

const router = express.Router();

// / => GET
router.get('/', getIndexController);

// /products => GET
router.get('/products', getProductsController);

// /checkout => GET
router.get('/checkout', getCheckoutController);

// /product/:id => GET
router.get('/product/:id', getProductController);

module.exports = router;
