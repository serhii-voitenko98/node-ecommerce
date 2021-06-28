const OrderService = require('../services/order.service');

module.exports = class OrderController {
	static getPage(req, res) {
		OrderService.getOrder(req.user)
			.then(data => {
				res.status(200).render('order/orders', {
					pageTitle: 'Order',
					orders: data,
				});
			})
	}

	static createOrder(req, res) {
		OrderService.createOrder(req.user)
			.then(orders => res.status(200).redirect('/orders'))
	}
}
