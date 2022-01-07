const TransactionsRepository = require('../repositories/TransactionsRepository');

class TransactionController {
  async index(request, response) {
    const transactions = await TransactionsRepository.findAll();

    response.json(transactions);
  }

  async store(request, response) {
    const {
      description, amount, date,
    } = request.body;

    if (!description) {
      return response.status(400).json({
        error: 'Description is required',
      });
    }

    if (!amount) {
      return response.status(400).json({
        error: 'Amount is required',
      });
    }

    if (!date) {
      return response.status(400).json({
        error: 'Date is required',
      });
    }

    const transaction = await TransactionsRepository.create({
      description, amount, date,
    });

    response.status(201).json(transaction);
  }

  async delete(request, response) {
    const { id } = request.params;

    await TransactionsRepository.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new TransactionController();
