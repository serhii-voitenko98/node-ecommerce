const {DataTypes} = require('sequelize');
const {db} = require('../helpers/database');

module.exports = sequelize => {
	const attributes = {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		}
	}

	return sequelize.define('order', attributes);
}
