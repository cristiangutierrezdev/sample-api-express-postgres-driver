const { Router } = require('express')
const router = Router()
const { crearMascota,
  obtenerTodasMascotas,
  obtenerMascota,
  modificarMascota,
  eliminarMascota,
  apiController,
  apiSumaController,
  apiUsuarioController,
  apiBodyController,
  loginController,
  registerController } = require('../controllers')

// CRUD de mascotas
router.post('/mascotas', crearMascota)
router.get('/mascotas', obtenerTodasMascotas)
router.get('/mascotas/:idMascota', obtenerMascota)
router.put('/mascotas/:idMascota', modificarMascota)
router.delete('/mascotas/:idMascota', eliminarMascota)

// CRUD ejercicio
router.get('/api', apiController)
router.get('/api/suma', apiSumaController)
router.get('/api/usuario/:nombre', apiUsuarioController)
router.put('/api/body', apiBodyController)

// LOGIN
router.post('/register', registerController)
router.post('/login', loginController)

module.exports = router
