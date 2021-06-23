const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_ecommerce', 'root', 's313233v', {
	dialect: 'mysql',
	host: 'localhost'
});

module.exports = sequelize;
