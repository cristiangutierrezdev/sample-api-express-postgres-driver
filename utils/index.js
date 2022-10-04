const jtw = require('jsonwebtoken')

const createToken = (data)=>{
  const token = jtw.sign(data, 'secret', {expiresIn: '1d'})
  return token
}

module.exports = {
  createToken
}
