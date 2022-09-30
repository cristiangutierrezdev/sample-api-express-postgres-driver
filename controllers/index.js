const connect = require('../database')

// req ---> recibe los datos de la peticion
// res ---> responde al cliente
// req.params ---> Recibimos los datos que llegan por la URL pero son obligatorios
// req.query ---> Recibimos los datos que llegan por la URL pero son opcionales
// req.body ---> Recibimos los datos que llegan en el body

//  Controladores de Mascotas
const crearMascota = async (req, res) => {
  const { nombre, tipo, raza, edad, propietario_id } = req.body

  try {
    const dbResponse = await connect.query(
      'INSERT INTO mascotas (nombre, tipo, raza, edad, propietario_id) VALUES ($1, $2, $3, $4, $5)',
      [nombre, tipo, raza, edad, propietario_id]
      )

      if(dbResponse.rowCount > 0){
        res.status(201).send({
          message: "Mascota creada" 
        })
      } else {
        res.status(409).send({
          message: "No se pudo crear la mascota en este momento." 
        })
      }

  } catch (error) {
    res.status(409).send({
      error
    })
  }
}

const obtenerTodasMascotas = async (req, res) => {
  try {
    const dbResponse = await connect.query('SELECT * FROM mascotas')

    res.status(200).send({
      data: dbResponse.rows
    })
  } catch (error) {
    res.status(404).send({
      error
    })
  }
}

const obtenerMascota = async (req, res) => {
  const id = req.params.idMascota

  try {
    const dbResponse = await connect.query('SELECT * FROM mascotas WHERE id_mascota = $1', [id])

    if(dbResponse.rowCount > 0) {
      res.status(200).send({
        data: dbResponse.rows
      })
    } else {
      res.status(404).send({
        message: 'Mascota no encontrada'
      })
    }

  } catch (error) {
    res.status(404).send({
      error
    })
  }
}

const modificarMascota = (req, res) => {
  console.log('modificar mascota');
}

const eliminarMascota = (req, res) => {
  console.log('eleminar mascota');
}

const apiController = (req, res) => {
  res.status(200).send({
    mensaje: 'hola mundo'
  })
}

// queries
// localhost:3000/api/suma?num1=5&num2=10
const apiSumaController = (req, res) => {
  const numeroUno = Number(req.query.num1)
  const numeroDos = Number(req.query.num2)

  const resultadoSuma = numeroUno + numeroDos

  res.status(200).send({
    resultado: resultadoSuma
  })
}

// params
// localhost:3000/api/usuario/merlin
const apiUsuarioController = (req, res) => {
  res.status(200).send({
    usuario: req.params.nombre
  })
}

// Body 
const apiBodyController = (req, res) => {
  const data = req.body

  res.status(200).send(data)
}

module.exports = {
  crearMascota,
  obtenerTodasMascotas,
  obtenerMascota,
  modificarMascota,
  eliminarMascota,
  apiController,
  apiSumaController,
  apiUsuarioController,
  apiBodyController
}