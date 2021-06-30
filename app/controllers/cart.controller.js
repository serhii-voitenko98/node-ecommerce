const CartService = require('../services/cart.service');

// /cart => GET
exports.getCartController = (req, res) => {
	CartService.fetchAllCardItems(req.user)
		.then(data => {
			res.status(200).render('shop/cart', {
				pageTitle: 'Cart',
				currentPath: '/cart',
				cart: data,
				totalPrice: data.reduce((acc, item) => acc + (item.price * item.cartItem.quantity), 0),
			});
		})
		.catch(error => console.error(error));
};

// /cart => POST
exports.addToCartController = (req, res) => {
	const id = req.body.id;

	CartService.addToCart(req.user, id).then(() => res.status(200).redirect('/cart'))
};

exports.deleteFromCartController = (req, res) => {
	const isDeleting = req.query.delete;

	if (isDeleting) {
		const id = req.params.id;

		CartService.removeFromCart(req.user, id).then(() => res.status(200).redirect('/cart'));
	}
};
