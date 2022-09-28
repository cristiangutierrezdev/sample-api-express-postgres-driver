// req ---> recibe los datos
// res ---> responde al cliente
const controllerget = (req, res)=>{
  console.log(req.params); // Recibimos datos que llegan por la URL pero me limita la ruta
  console.log(req.query); // Recibimos datos que llegan por la URL pero no me limita la ruta

  res.send({
    message: 'Este es el id ' + req.params.productid
  });
}

const controllerpost = (req, res)=>{
  console.log(req.body); // Se utiliza con POST , PUT, PATCH o DELETE
  res.send({
    message: 'usuario creado'
  })
}

module.exports = {
  controllerget,
  controllerpost
}