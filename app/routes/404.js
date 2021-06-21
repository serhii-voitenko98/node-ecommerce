const express = require('express');
const { getNotFoundPage } = require('../controllers/404');

const router = express.Router();

router.use(getNotFoundPage);

module.exports = router;