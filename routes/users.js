var express = require('express');
var usersController = require('../controllers/users');
var router = express.Router();

// base path: /users

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Create a user profile
router.post('/create', usersController.createUser);

module.exports = router;
