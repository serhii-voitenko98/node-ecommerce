const express = require('express');
const OrderController = require('../controllers/order.controller');

const router = express.Router();

router.get('/order', OrderController.getPage);

module.exports = router;
