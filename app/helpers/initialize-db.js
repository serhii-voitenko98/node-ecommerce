module.exports = (sequelize) => {
	const db = {}

	db.Product = require('../models/product.model')(sequelize);
	db.User = require('../models/user.model')(sequelize);
	db.Cart = require('../models/cart.model')(sequelize);
	db.CartItem = require('../models/cart-item.model')(sequelize);
	db.Order = require('../models/order.model')(sequelize);
	db.OrderItem = require('../models/order-item.model')(sequelize);

	const {Product, User, Cart, CartItem, Order, OrderItem} = db;

	Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
	Product.belongsToMany(Cart, {through: CartItem});
	Product.belongsToMany(Order, {through: OrderItem});

	User.hasOne(Cart);
	User.hasMany(Product);
	User.hasMany(Order);

	Cart.belongsTo(User);
	Cart.belongsToMany(Product, {through: CartItem});

	Order.belongsTo(User);
	Order.belongsToMany(Product, {through: OrderItem});

	return db;
}
