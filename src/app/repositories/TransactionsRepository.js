const transactions = [
  {
    id: 1,
    description: 'Compra',
    value: 1200.00,
    date: 1641345310311,
  },
];

class TransactionsRepository {
  findAll() {
    return transactions;
  }
}

module.exports = new TransactionsRepository();
