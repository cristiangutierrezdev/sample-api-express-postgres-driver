// req ---> recibe los datos de la peticion
// res ---> responde al cliente
// req.params ---> Recibimos los datos que llegan por la URL pero son obligatorios
// req.query ---> Recibimos los datos que llegan por la URL pero son opcionales
// req.body ---> Recibimos los datos que llegan en el body

//  Controladores de Mascotas
const crearMascota = (req, res) => {
  console.log('crear mascota');

  const nombre = req.body.nombre
  const edad = req.body.edad
  console.log(`El nombre de la mascota es ${nombre} y tiene ${edad} años.`);

  res.status(201).send({
    message: 'Tu mascota fue creada'
  })
}

const obtenerTodasMascotas = (req, res) => {
  console.log('obtener todas las mascotas');

  res.status(200).send({
    data: [
      {
        "name": 'Mascota 1'
      },
      {
        "name": 'Mascota 1'
      },
    ]
  })
}

const obtenerMascota = (req, res) => {
  console.log('obtener una mascota');
}

const modificarMascota = (req, res) => {
  console.log('modificar mascota');
}

const eliminarMascota = (req, res) => {
  console.log('eleminar mascota');
}

module.exports = {
  crearMascota,
  obtenerTodasMascotas,
  obtenerMascota,
  modificarMascota,
  eliminarMascota
}