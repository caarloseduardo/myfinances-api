const TransactionsRepository = require('../repositories/TransactionsRepository');

class TransactionController {
  async index(request, response) {
    const transactions = TransactionsRepository.findAll();

    response.json(transactions);
  }
}

module.exports = new TransactionController();
