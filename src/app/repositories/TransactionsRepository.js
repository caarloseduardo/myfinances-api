const db = require('../../database');

class TransactionsRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM transactions');
    return rows;
  }

  async create({
    description, amount, date,
  }) {
    const [row] = await db.query(`
      INSERT INTO transactions(description, amount, date)
      VALUES($1, $2, $3)
      RETURNING *
    `, [description, amount, date]);

    return row;
  }
}

module.exports = new TransactionsRepository();