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

  async update(id, {
    description, amount, date,
  }) {
    const [row] = await db.query(`
      UPDATE transactions
      SET description = $1, amount = $2, date = $3
      WHERE id = $4
      RETURNING *
    `, [description, amount, date, id]);
    return row;
  }

  async delete(id) {
    const deleteOp = await db.query('DELETE FROM transactions WHERE id = $1', [id]);
    return deleteOp;
  }
}

module.exports = new TransactionsRepository();
