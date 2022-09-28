const { Router } = require('express')
const router = Router()
const {controllerget, controllerpost} = require('../controllers')

router.get('/products/:productid', controllerget)
router.post('/products', controllerpost)


module.exports = router
