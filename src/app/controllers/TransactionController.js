const TransactionsRepository = require('../repositories/TransactionsRepository');

class TransactionController {
  index(request, response) {
    const transactions = TransactionsRepository.findAll();

    response.json(transactions);
  }
}

module.exports = new TransactionController();
