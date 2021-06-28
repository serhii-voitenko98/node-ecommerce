module.exports = (sequelize) => {
	const db = {}

	db.Product = require('../models/product.model')(sequelize);
	db.User = require('../models/user.model')(sequelize);
	db.Cart = require('../models/cart.model')(sequelize);
	db.CartItem = require('../models/cart-item.model')(sequelize);
	db.Order = require('../models/order.model')(sequelize);
	db.OrderItem = require('../models/order-item.model')(sequelize);

	const {Product, User, Cart, CartItem, Order, OrderItem} = db;

	User.hasMany(Product);
	Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});

	Product.belongsToMany(Cart, {through: CartItem});
	Cart.belongsToMany(Product, {through: CartItem});

	Product.belongsToMany(Order, {through: OrderItem});
	Order.belongsToMany(Product, {through: OrderItem});

	User.hasOne(Cart);
	Cart.belongsTo(User);

	User.hasMany(Order);
	Order.belongsTo(User);

	return db;
}
