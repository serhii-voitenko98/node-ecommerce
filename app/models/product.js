const { DataTypes } = require('sequelize');

module.exports = sequelize => {
	const attributes = {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		price: {
			type: DataTypes.DOUBLE,
			allowNull: false,
		},
		imageUrl: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	};

	const options = {
		defaultScope: {
			// exclude hash by default
			attributes: { exclude: ['hash'] }
		},
		scopes: {
			// include hash with this scope
			withHash: { attributes: {}, }
		}
	};

	return sequelize.define('Product', attributes, options);
}
