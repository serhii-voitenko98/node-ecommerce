const Product = require('../models/product');

// / => GET
exports.getIndexController = (req, res) => {
    Product.fetchAll((error, data) => {
        res.status(200).render('shop/index', {
            pageTitle: 'Main Page',
            currentPath: '/',
            prods: data,
        });
        error && console.log(error);
    });
};

// /products => GET
exports.getProductsController = (req, res) => {
    Product.fetchAll((error, data) => {
        res.status(200).render('shop/products', {
            pageTitle: 'Products',
            currentPath: '/products',
            prods: data,
        });
        error && console.log(error);
    });
};

// /cart => GET
exports.getCartController = (req, res) => {
    res.status(200).render('shop/cart', {
        pageTitle: 'Cart',
        currentPath: '/cart',
    });
};

// /cart => POST
exports.addToCartController = (req, res) => {
    // res.status(200).render('shop/cart', {
    //     pageTitle: 'Cart',
    //     currentPath: '/cart',
    // });
};

// /checkout => GET
exports.getCheckoutController = (req, res) => {
    res.status(200).render('shop/checkout', {
        pageTitle: 'Checkout',
        currentPath: '/checkout',
    });
};
