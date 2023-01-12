var express = require('express');
var router = express.Router();

require('dotenv').config()
var pool = require('../models/db')
var usersModel = require('../models/usersModels')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { 
    title: 'Home',
    bienvenida: 'Este es el home de la tarea del modulo 4 unidad 33333333!!!',
  }); //el 2do parametro es un objeto
});

/* router.get('/admin/logout', (req, res, next) => {
  req.session.destroy();
  res.render('index', { 
    title: 'Home',
    bienvenida: 'Este es el home de la tarea del modulo 4 unidad 3!!!',
  }); 
}); */


/* router.post('/login', async (req, res, next) => {
  try {
    var user = req.body.user;
    var pass = req.body.pass;
    var data = await usersModel.getUserByLogin(user,pass);

    if (data != undefined){
      req.session.id = data.id_usuario
      req.session.nombre = data.nombre
      req.session.admin = data.rol == 'Administrador'

      res.render('index', { 
        title: 'Home',
        bienvenida: 'data esta definidom, paso user y pw',
        nombre: req.session.nombre,
        admin: req.session.admin
      });
    } else {
      res.render('index', { 
        title: 'Home',
        bienvenida: 'data no esta definido',
        error: true,
      });
    }
  } catch (error) {
    console.log(error);
  }

}) */


module.exports = router;
