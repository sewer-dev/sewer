var express = require('express');
var router = express.Router();

var user = require('../../model/admin/user');

router.post('/', (req, res, next) => {
  user.login()
});

module.exports = router;
