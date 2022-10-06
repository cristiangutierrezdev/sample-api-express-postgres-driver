const { Pool } = require("pg")

const connect = new Pool({
  host:"babar.db.elephantsql.com",
  user: "qnlmzpxe",
  password: "vH8SfMxXI5ovpwmK0GIEycS-x9OE7lzy",
  database: "qnlmzpxe",
  port: "5432"
})

module.exports = connect
