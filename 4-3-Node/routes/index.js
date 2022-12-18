var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  req.session.nombre = "Pedro Flor"
  req.session.rol = "administrador"
  req.session.visitas = req.session.visitas ? ++req.session.visitas : 1
  res.render('index', { 
    title: 'Home',
    bienvenida: 'Este es el home de la tarea del modulo 4 unidad 3!!!',
    nombre: req.session.nombre,
    rol: req.session.rol,
    visitas: req.session.visitas}); //el 2do parametro es un objeto
});

module.exports = router;
