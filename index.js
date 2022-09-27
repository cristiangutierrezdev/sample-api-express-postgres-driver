const express = require('express')
const app = express()

app.get('/users', (req, res) => { console.log('hola mundo') })

app.listen(3000, (error) => {
  error ? console.log(error) : console.log('Server running');
})
