const express = require('express');
const { getNotFoundPage } = require('../controllers/404.controller');

const router = express.Router();

router.use(getNotFoundPage);

module.exports = router;
