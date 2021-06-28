const path = require('path');
const rootDir = require('./helpers/path');

const express = require('express');
const bodyParser = require('body-parser');

const UserService = require('./services/user.service');

const app = express();

const { db, sequelize } = require('./helpers/database');

app.set('view engine', 'pug');
app.set('views', path.join(rootDir, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const cartRouter = require('./routes/cart');
const orderRouter = require('./routes/order.router');
const notFoundRouter = require('./routes/404');

app.use((req, res, next) => {
  db.User.findByPk(1)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRouter);
app.use(shopRouter);
app.use(cartRouter);
app.use(orderRouter);
app.use(notFoundRouter);

sequelize
  .sync()
  // .sync({force: true})
  .then(() => {
    return UserService.getById(1);
  })
  .then(user => {
    if (!user) {
      return UserService.createUser({ name: 'Serhii', email: 'test@gmail.com' });
    }

    return user;
  })
  .then(user => {
    return user.getCart().then(cart => {
      if (!cart) {
        return user.createCart();
      }

      return cart;
    });
  })
  .then(cart => {
    app.listen(3200);
  });


