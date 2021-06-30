const mongodb = require('mongodb');
const { MongoClient } = mongodb;

const URI = "mongodb+srv://merlin:lzeENoU1Y7PExxRx@nodeecommerce.lfohb.mongodb.net/shop?retryWrites=true&w=majority";
const client = new MongoClient(URI, { useUnifiedTopology: true });

let _db;

const mongoConnect = callback => {
	client.connect()
		.then(client => {
			console.log('MongoDB connected!');
			_db = client.db();
			callback();
		})
		.catch()
}

const getDB = () => {
	if (_db) {
		return _db;
	}
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;
