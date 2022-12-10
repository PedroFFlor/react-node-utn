var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('el arreglo imagenes es para la tarea del 4-4');
  res.render('galeria', { title: 'Galeria' ,imgaenes: ['/images/galeria1', '/images/galeria2','/images/galeria3']});
});

module.exports = router;
