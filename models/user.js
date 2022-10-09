const db = require('../db/db')
const User={
  create: (username, email, passwordDigest) => {
    const sql = `
      INSERT INTO users(username, email, password_digest)
      VALUES ($1, $2, $3)
      RETURNING *
    `
    return db
            .query(sql, [username, email, passwordDigest])
            .then(dbRes => dbRes.rows[0].email)
  },

  findByUsername: username => {
    const sql = `
      SELECT *
      FROM users
      WHERE username = $1
    `
    return db
            .query(sql, [username])
            .then(dbRes => dbRes.rows[0])
  },

  findByEmail: email => {
    const sql = `
      SELECT *
      FROM users
      WHERE email = $1
    `
    return db
            .query(sql, [email])
            .then(dbRes => dbRes.rows[0])
  },

  findById: id =>{
    const sql = `
      SELECT *
      FROM users
      WHERE id = $1
    `
    return db
            .query(sql, [id])
            .then(dbRes => dbRes.rows[0])
  }
}

module.exports = User
