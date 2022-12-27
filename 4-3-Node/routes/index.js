var express = require('express');
var router = express.Router();

require('dotenv').config()
var pool = require('../models/db')

var trabajo = 'Gerente de finanzas'

var json = pool.query('select nombre from empleados where trabajo =?',trabajo).then(function (resultado) {
  
  //console.log(resultado)
})

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
    visitas: req.session.visitas
  }); //el 2do parametro es un objeto
});

module.exports = router;
