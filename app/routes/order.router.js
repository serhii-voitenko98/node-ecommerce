const express = require('express');
const OrderController = require('../controllers/order.controller');

const router = express.Router();

router.get('/orders', OrderController.getPage);
router.post('/create-order', OrderController.createOrder);

module.exports = router;
