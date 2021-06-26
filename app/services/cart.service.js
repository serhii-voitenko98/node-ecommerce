const { db } = require('../helpers/database');

module.exports = class CartService {
	static async fetchAllCardItems(user) {
		return user.getCart().then(cart => cart.getProducts());
	}
}
