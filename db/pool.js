const { Pool } = require("pg");

module.exports = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  DATABASE: process.env.DATABASE,
  PGPORT: process.env.PGPORT,
  PASSWORD: process.env.PASSWORD,
});
