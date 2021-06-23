const Cart = require('../models/cart');

// /cart => GET
exports.getCartController = (req, res) => {
	Cart.getCart((error, data) => {
		res.status(200).render('shop/cart', {
			pageTitle: 'Cart',
			currentPath: '/cart',
			cart: data.cart,
			totalPrice: data.totalPrice,
		});
	});
};

// /cart => POST
exports.addToCartController = (req, res) => {
	const id = req.body.id;

	Cart.addProduct(id, (error, data) => {
		res.status(200).render('shop/cart', {
			pageTitle: 'Cart',
			currentPath: '/cart',
			cart: data.cart,
			totalPrice: data.totalPrice,
		});
		error && console.log(error);
	});
};

exports.deleteFromCartController = (req, res) => {
	const isDeleting = req.query.delete;

	if (isDeleting) {
		const id = req.params.id;

		Cart.removeFromCart(id, (error, data) => {
			res.status(200).render('shop/cart', {
				pageTitle: 'Cart',
				currentPath: '/cart',
				cart: data.cart,
				totalPrice: data.totalPrice,
			});
			error && console.log(error);
		});
	}
}
