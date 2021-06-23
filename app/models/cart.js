const path = require('path');
const rootDir = require('../helpers/path');
const FileManager = require('../helpers/file-manager');
const Product = require('./product');

const pathToFile = path.join(rootDir, 'data', 'cart.json');

module.exports = class Cart {
	static addProduct(id, cb) {
		FileManager.readFile(pathToFile, (error, cart) => {
			Product.getById(id, (error, product) => {
				const existingProduct = cart.find(item => item.id === product.id);

				if (existingProduct) {
					existingProduct.qty = existingProduct.qty ? ++existingProduct.qty : 1;
				} else {
					product.qty = 1;
					cart = [...cart, product];
				}

				FileManager.writeFile(pathToFile, cart, (error, data) => {
					cb(error, {
						cart: data,
						totalPrice: Cart.#getTotalPrice(data),
					});
				});
			});
		});
	}

	static getCart(cb) {
		FileManager.readFile(pathToFile, (error, data) => {
			cb(error, {
				cart: data,
				totalPrice: Cart.#getTotalPrice(data),
			});
		})
	}

	static removeFromCart(id, cb) {
		FileManager.readFile(pathToFile, (error, data) => {
			const filtered = data.filter(item => item.id != id);

			FileManager.writeFile(pathToFile, filtered, (error, data) => {
				cb(error, {
					cart: data,
					totalPrice: Cart.#getTotalPrice(data),
				});
			});
		});
	}

	static #getTotalPrice(data) {
		return data.reduce((acc, item) => acc + (parseInt(item.price, 10) * item.qty), 0)
	}
}
