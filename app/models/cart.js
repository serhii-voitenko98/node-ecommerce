const path = require('path');
const rootDir = require('../helpers/path');
const FileManager = require('../helpers/file-manager');
const Product = require('./product');

const pathToFile = path.join(rootDir, 'data', 'cart.json');

module.exports = class Cart {
	static addProduct(id, cb) {
		FileManager.readFile(pathToFile, (error, cart) => {
			Product.getById(id, (error, product) => {
				FileManager.writeFile(pathToFile, [...cart, product], (error, data) => {
					cb(error, {
						cart: data,
						totalPrice: data.reduce((acc, item) => acc + parseInt(item.price, 10), 0),
					});
				});
			});
		});
	}

	static getCart(cb) {
		FileManager.readFile(pathToFile, (error, data) => {
			cb(error, {
				cart: data,
				totalPrice: data.reduce((acc, item) => acc + parseInt(item.price, 10), 0),
			});
		})
	}
}
