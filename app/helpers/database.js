const config = require('../config.json');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize() {
		const { host, port, user, password, database } = config.database;
		const connection = await mysql.createConnection({host, port, user, password});
		await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

		const sequelize = new Sequelize(database, user, password, {dialect: 'mysql'});

		db.Product = require('../models/product')(sequelize);
		db.User = require('../models/user.model')(sequelize);

		db.Product.belongsTo(db.User, { constraints: true, onDelete: 'CASCADE' });
		db.User.hasMany(db.Product);

		await sequelize
				// .sync({ force: true })
				.sync()
				.catch();
}
