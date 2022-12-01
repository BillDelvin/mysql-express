require("dotenv").config();
const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: `${process.env.HOST}`,
  user: "root",
  database: `${process.env.DATABASE}`,
  password: "bill1234",
});

module.exports = { db };
