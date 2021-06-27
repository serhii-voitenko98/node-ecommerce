const express = require('express');
const {
	getCartController,
	addToCartController,
	deleteFromCartController,
} = require('../controllers/cart');

const router = express.Router();

// /cart => GET
router.get('/cart', getCartController);

// /cart => POST
router.post('/cart', addToCartController);
//
// /cart => POST
router.post('/cart/:id', deleteFromCartController);

module.exports = router;
