var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('admin/panel', { title: 'Panel', bienvenida: 'pronto seccion admin' });
});

module.exports = router;
