const { Pool, Client } = require('pg')

const pool = new Pool({
  user: '',
  host: 'localhost',
  database: 'notable',
  password: '',
  port: 5432,
})