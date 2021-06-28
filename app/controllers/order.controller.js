const OrderService = require('../services/order.service');

module.exports = class OrderController {
	static getPage(req, res) {
		OrderService.getOrders(req.user)
			.then(data => {
				res.status(200).render('order/orders', {
					path: '/orders',
					pageTitle: 'Order',
					orders: data,
				});
			})
	}

	static createOrder(req, res) {
		OrderService.createOrder(req.user)
			.then(() => res.status(200).redirect('/orders'))
	}
}
