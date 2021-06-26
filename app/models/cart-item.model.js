const { DataTypes } = require('sequelize');

module.exports = sequelize => {
	const attributes = {
		id: {
			type: DataTypes['INTEGER'],
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		quantity: {
			type: DataTypes['INTEGER'],
			allowNull: false,
		}
	};

	return sequelize.define('cartItem', attributes);
}
