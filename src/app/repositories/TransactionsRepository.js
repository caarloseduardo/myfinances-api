const db = require('../../database');

class TransactionsRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM transactions');
    return rows;
  }
}

module.exports = new TransactionsRepository();
