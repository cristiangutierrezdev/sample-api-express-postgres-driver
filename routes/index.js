const { Router } = require('express')
const router = Router()

router.get('/users', function (req, res) {
  console.log(req.body)
  res.json({ data: [{ id: 12332, name: 'Angel' }] })
})

module.exports = router
