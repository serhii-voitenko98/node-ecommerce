const path = require('path');
const rootDir = require('./helpers/path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const { mongoConnect } = require('./helpers/database');

app.set('view engine', 'pug');
app.set('views', path.join(rootDir, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const adminRouter = require('./routes/admin.router');
// const shopRouter = require('./routes/shop.router');
// const cartRouter = require('./routes/cart.router');
// const orderRouter = require('./routes/order.router');
const notFoundRouter = require('./routes/404.router');

app.use('/admin', adminRouter);
// app.use(shopRouter);
// app.use(cartRouter);
// app.use(orderRouter);
app.use(notFoundRouter);

mongoConnect(() => {
	app.listen(3200);
});
