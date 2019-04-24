var express = require('express');
var router = express.Router();

router.post('/add', (req, res, next) => {
  res.send('hotel add');
});

router.post('/list', (req, res, next) => {
  res.send('hotel list');
});

router.post('/get', (req, res, next) => {
  res.send('hotel get');
});

router.put('/:id', (req, res, next) => {
  var id = req.params.id;
  res.send('hotel put');
});

router.delete('/:id', (req, res, next) => {
  var id = req.params.id;
  res.send('hotel delete');
});
module.exports = router;
