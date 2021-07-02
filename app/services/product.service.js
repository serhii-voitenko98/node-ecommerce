const { getDB } = require('../helpers/database');
const mongodb = require('mongodb');
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

	static getById(productId) {
		const db = getDB();

		return db.collection('products').find({_id: new mongodb.ObjectId(productId)})
			.next()
			.then(product => product);
	}

	static update(productId, data) {
		const db = getDB();

		return db.collection('products').updateOne({_id: new mongodb.ObjectId(productId)}, {$set: data});
	}

	static delete(productId) {
		const db = getDB();

		return db.collection('products').deleteOne({_id: new mongodb.ObjectId(productId)});
	}
}
