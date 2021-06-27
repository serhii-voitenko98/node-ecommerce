const { db } = require('../helpers/database');
const ProductService = require('../services/product.service');

module.exports = class CartService {
	static fetchAllCardItems(user) {
		return user.getCart().then(cart => cart.getProducts());
	}

	static addToCart(user, productId) {
		let currentCart;
		let newQuantity = 1;

		return user.getCart()
			.then(cart => {
				currentCart = cart;
				return cart.getProducts({where: {id: productId}});
			})
			.then(([product]) => {
				if (product) {
					newQuantity = ++product.cartItem.quantity;
					return product;
				}

				return ProductService.getById(productId);
			})
			.then(product => {
				return currentCart.addProduct(product, {through: {quantity: newQuantity}});
			});
	}

	static removeFromCart(user, productId) {
		return user.getCart()
			.then(cart => {
				cart.getProducts({where: {id: productId}})
					.then(([product]) => {
						return cart.removeProduct(product);
					})
			});
	}
}
