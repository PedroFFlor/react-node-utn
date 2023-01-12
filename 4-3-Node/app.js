var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')
require('dotenv').config()
var pool = require('./models/db')

var router = express.Router();
var usersModel = require('./models/usersModels')


var indexRouter = require('./routes/index');
var contactoRouter = require('./routes/contacto');
var galeriaRouter = require('./routes/galeria');
var panelRouter = require('./routes/admin/panel');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: '123456',
  resave: false,
  saveUninitialized: true,
}))

secured = async (req, res, next) => {
  try {
    console.log(req.session);
    if (req.session.id_usuario){
      console.log('verd');
      next();
    } else {
      console.log('falso');
      next();
    }
  } catch (error) {
    console.log(error);
  }
}

app.use('/', indexRouter);
app.use('/contacto', contactoRouter);
app.use('/galeria', galeriaRouter);
app.use('/panel', panelRouter);


router.get('/admin/logout', (req, res, next) => {
  req.session.destroy();
  res.render('index', { 
    title: 'Home',
    bienvenida: 'sesion destruida',
  }); 
});

router.post('/login', async (req, res, next) => {
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

})

/* pool.query('select * from empleados').then(function (resultado) {
  console.log(resultado)
}) */


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  console.log('no existe la ruta');
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
