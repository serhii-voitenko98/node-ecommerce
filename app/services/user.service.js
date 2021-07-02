const { getDB } = require('../helpers/database');
const mongodb = require('mongodb');
const User = require('../models/user.model');

module.exports = class UserService {
	static save(data) {
		const db = getDB();
		const user = new User(data);

		return db.collection('users').insertOne(user);
	}

	static getById(userId) {
		const db = getDB();

		return db.collection('users').findOne({_id: new mongodb.ObjectId(userId)});
	}
}
