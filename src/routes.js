const { Router } = require('express');

const TransactionController = require('./app/controllers/TransactionController');

const router = Router();

router.get('/transactions', TransactionController.index);

module.exports = router;
