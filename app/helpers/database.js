const db = require('mysql2');

const pool = db.createPool({
	host: 'localhost',
	user: 'root',
	database: 'node_ecommerce',
	password: 's313233v',
});

module.exports = pool.promise();
