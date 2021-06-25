const { DataTypes } = require('sequelize');

module.exports = sequelize => {
	const attributes = {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	};

	const options = {
		defaultScope: {
			// exclude hash by default
			attributes: {exclude: ['hash']}
		},
		scopes: {
			// include hash with this scope
			withHash: {attributes: {},}
		}
	};

	return sequelize.define('User', attributes, options);
}
