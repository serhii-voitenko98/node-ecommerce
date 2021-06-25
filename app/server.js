const path = require('path');
const rootDir = require('./helpers/path');

const express = require('express');
const bodyParser = require('body-parser');

const UserService = require('./services/user.service');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(rootDir, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const cartRouter = require('./routes/cart');
const notFoundRouter = require('./routes/404');

app.use((req, res, next) => {
  UserService.getById(1)
    .then(user => {
      if (!user) {
        return UserService.create({ name: 'Serhii', email: 'test@gmail.com' });
      }

      return user;
    })
    .then(user => {
      req.user = user;
      next();
    })
    .catch(error => {
      console.error(error);
    })
});

app.use('/admin', adminRouter);
app.use(shopRouter);
app.use(cartRouter);
app.use(notFoundRouter);

app.listen(3200);
