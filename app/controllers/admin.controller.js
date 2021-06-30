const ProductService = require('../services/product.service');
const Cart = require('../models/cart.model');
const formGroup = require('../models/form-group');

// admin/products => GET
exports.getAdminProductsController = (req, res) => {
	ProductService.fetchAll()
		.then(data => {
			res.status(200).render('admin/products', {
				pageTitle: 'Products',
				currentPath: 'admin/products',
				prods: data,
			});
		});
};

// admin/add-product => GET
exports.addProductPageController = (req, res) => {
	res.status(200).render('admin/add-product', {
		controls: formGroup,
		pageTitle: 'Add product',
		currentPath: '/admin/add-product',
	});
};

// admin/add-product => POST
exports.addProductController = (req, res) => {
	ProductService.save({
		title: req.body.title,
		price: req.body.price,
		imageUrl: req.body.imageUrl,
		description: req.body.description,
	})
	.then(() => {
		res.redirect('/');
	})
	.catch(error => {
		console.log(error);
	})
};

// // admin/edit-product => GET
// exports.editProductPageController = (req, res) => {
// 	const productId = req.params.id;
//
// 	ProductService.getById(productId)
// 	  .then(data => {
// 		  res.status(200).render('admin/edit-product', {
// 			  controls: formGroup,
// 			  pageTitle: 'Edit product',
// 			  currentPath: '/admin/edit-product',
// 			  product: data,
// 		  });
// 	  })
// 	  .catch(error => {
// 		  error && console.log(error);
// 	  });
// }
//
// // admin/edit-product => POST
// exports.editProductController = (req, res) => {
// 	const id = req.params.id;
//
// 	ProductService.update(id, req.body)
// 	  .then(() => ProductService.fetchAll())
// 	  .then(data => {
// 		  res.status(200).render('admin/products', {
// 			  pageTitle: 'Products',
// 			  currentPath: 'admin/products',
// 			  prods: data,
// 		  });
// 	  })
// 	  .catch(error => {
// 		  console.error(error);
// 	  });
// }
//
// // admin/remove-product => POST
// exports.removeProductController = (req, res) => {
// 	const {id} = req.body;
//
// 	Cart.removeFromCart(id, () => {
// 		ProductService.remove(id)
// 			.then(() => ProductService.fetchAll())
// 			.then(data => {
// 				res.status(200).render('admin/products', {
// 					pageTitle: 'Products',
// 					currentPath: 'admin/products',
// 					prods: data,
// 				});
// 			})
// 			.catch(error => {
// 				error && console.log(error);
// 			});
// 	});
// }
