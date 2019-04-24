var express = require('express');
var router = express.Router();

router.post('/add', (req, res, next) => {
  res.send('room add');
});

router.post('/list', (req, res, next) => {
  res.send('room list');
});

router.post('/get', (req, res, next) => {
  res.send('room get');
});

router.put('/:id', (req, res, next) => {
  var id = req.params.id;
  res.send('room put');
});

router.delete('/:id', (req, res, next) => {
  var id = req.params.id;
  res.send('room delete');
});

module.exports = router;
