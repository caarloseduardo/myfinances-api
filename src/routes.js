const { Router } = require('express');

const TransactionController = require('./app/controllers/TransactionController');

const router = Router();

router.get('/transactions', TransactionController.index);
router.post('/transactions', TransactionController.store);
router.put('/transactions/:id', TransactionController.update);
router.delete('/transactions/:id', TransactionController.delete);

module.exports = router;
