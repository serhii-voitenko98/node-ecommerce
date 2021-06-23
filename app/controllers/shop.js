const Product = require('../models/product');

// / => GET
exports.getIndexController = (req, res) => {
	res.redirect('/products');
};

// /products => GET
exports.getProductsController = (req, res) => {
	Product.fetchAll()
		.then(([rows]) => {
			res.status(200).render('shop/products', {
				pageTitle: 'Products',
				currentPath: '/products',
				prods: rows,
			});
		})
    .catch(error => {
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

	Product.getById(productId)
		.then(([rows]) => {
			res.status(200).render('shop/details', {
				pageTitle: 'Product Details',
				currentPath: '/product/:id',
				product: rows[0]
			});
		})
		.catch(error => {
			error && console.log(error);
		});
};
