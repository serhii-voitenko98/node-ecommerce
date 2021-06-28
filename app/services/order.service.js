module.exports = class OrderService {
	static getOrder(user) {
		return user.getOrders();
	}

	static createOrder(user) {
		return user.getCart()
			.then(cart => {
				return cart.getProducts();
			})
			.then(products => {
				user.createOrder()
					.then(order => {
						return order.addProducts(products.map(product => {
							product.orderItem = { quantity: product.cartItem.quantity };
							return product;
						}))
					});
			});
	}
}
