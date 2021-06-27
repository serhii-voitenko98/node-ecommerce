const config = require('../config.json');
const mysql = require('mysql2/promise');
const {Sequelize} = require('sequelize');
const initializeDB = require('./initialize-db');

const {host, port, user, password, database} = config.database;

(async function initialize() {
	const connection = await mysql.createConnection({host, port, user, password});
	await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
})();

const sequelize = new Sequelize(database, user, password, {dialect: 'mysql'});
const db = initializeDB(sequelize);

exports.sequelize = sequelize;
exports.db = db;
