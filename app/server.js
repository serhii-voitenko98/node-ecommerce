const path = require('path');
const rootDir = require('./helpers/path');

const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./helpers/database');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(rootDir, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const cartRouter = require('./routes/cart');
const notFoundRouter = require('./routes/404');

app.use('/admin', adminRouter);
app.use(shopRouter);
app.use(cartRouter);
app.use(notFoundRouter);

sequelize
	.sync()
	.then(() => {
		app.listen(3200);
	})
	.catch(error => {
		console.log(error);
	})
