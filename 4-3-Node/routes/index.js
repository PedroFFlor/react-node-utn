var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home',bienvenida: 'Este es el home de la tarea del modulo 4 unidad 3!!!'}); //el 2do parametro es un objeto
});

module.exports = router;
