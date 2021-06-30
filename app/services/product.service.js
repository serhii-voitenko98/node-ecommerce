const { getDB } = require('../helpers/database');
const Product = require('../models/product.model');

module.exports = class ProductService {
	static fetchAll() {
		const db = getDB();
		return db.collection('products').find({}).toArray();
	}

	static save(data) {
		const db = getDB();
		const product = new Product(data);

		return db.collection('products').insertOne(product);
	}
}
