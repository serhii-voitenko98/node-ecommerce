const express = require('express');
const {
    addProductPageController,
    addProductController,
    removeProductController,
    editProductPageController,
    getAdminProductsController,
    editProductController,
} = require('../controllers/admin.controller');

const router = express.Router();

// admin/add-product => GET
router.get('/add-product', addProductPageController);

// admin/add-product => POST
router.post('/add-product', addProductController);

// // admin/remove-product => POST
// router.post('/remove-product', removeProductController);
//
// // admin/edit-product => GET
// router.get('/edit-product/:id', editProductPageController);
//
// // admin/edit-product => POST
// router.post('/edit-product/:id', editProductController);

// admin/products => GET
router.get('/products', getAdminProductsController);

module.exports = router;
