module.exports = (sequelize) => {
	const db = {}

	db.Product = require('../models/product.model')(sequelize);
	db.User = require('../models/user.model')(sequelize);
	db.Cart = require('../models/cart.model')(sequelize);
	db.CartItem = require('../models/cart-item.model')(sequelize);

	const {Product, User, Cart, CartItem} = db;

	Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
	Product.belongsToMany(Cart, {through: CartItem});

	User.hasOne(Cart);
	User.hasMany(Product);

	Cart.belongsTo(User);
	Cart.belongsToMany(Product, {through: CartItem});

	return db;
}
