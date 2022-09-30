const { Pool } = require("pg")

const connect = new Pool({
  host:"localhost",
  user: "postgres",
  password: "hola",
  database: "intro-backend",
  port: "5432"
})

module.exports = connect
