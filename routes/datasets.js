var express = require('express');
var datasetsController = require('../controllers/datasets');
var router = express.Router();
var securityMiddleware = require('../middlewares/security');

// base path: /datasets

// // Show all user profiles
// router.get('/show', usersController.getAllUsers);

// // Show particular user profile
// router.get('/showOne/:id', usersController.getUser);

// TODO: add security middleware to router
// Create a user profile
router.post('/create', datasetsController.createDataset);

module.exports = router;
