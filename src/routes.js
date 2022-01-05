const { Router } = require('express');

const TransactionController = require('./app/controllers/TransactionController');

const router = Router();

router.get('/transactions', TransactionController.index);
router.post('/transactions', TransactionController.store);

module.exports = router;
