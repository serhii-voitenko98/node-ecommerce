module.exports = class OrderService {
	static getOrders(user) {
		return user.getOrders({include: ['products']});
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
