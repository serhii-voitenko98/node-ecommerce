const Product = require('../models/product');
const Cart = require('../models/cart');

// / => GET
exports.getIndexController = (req, res) => {
    res.redirect('/products');
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
    Cart.getCart((error, data) => {
        res.status(200).render('shop/cart', {
            pageTitle: 'Cart',
            currentPath: '/cart',
            cart: data.cart,
            totalPrice: data.totalPrice,
        });
    });
};

// /cart => POST
exports.addToCartController = (req, res) => {
    const id = req.body.id;

    Cart.addProduct(id, (error, data) => {
        res.status(200).render('shop/cart', {
            pageTitle: 'Cart',
            currentPath: '/cart',
            cart: data.cart,
            totalPrice: data.totalPrice,
        });
        error && console.log(error);
    });
};

// /checkout => GET
exports.getCheckoutController = (req, res) => {
    res.status(200).render('shop/checkout', {
        pageTitle: 'Checkout',
        currentPath: '/checkout',
    });
};

// /product/:id => GET
exports.getProductController = (req, res) => {
    const productId = req.params.id;

    Product.getById(productId, (error, data) => {
        res.status(200).render('shop/details', {
            pageTitle: 'Product Details',
            currentPath: '/product/:id',
            product: data
        });
        error && console.log(error);
    });
};
