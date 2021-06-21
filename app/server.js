const path = require('path');
const rootDir = require('./helpers/path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(rootDir, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const notFoundRouter = require('./routes/404');

app.use('/admin', adminRouter);
app.use(shopRouter);
app.use(notFoundRouter);

app.listen(3000);
