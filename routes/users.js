var express = require('express');
var usersController = require('../controllers/users');
var router = express.Router();
var securityMiddleware = require('../middlewares/security');

// base path: /users

// Show all user profiles
router.get('/show', usersController.getAllUsers);

// Show particular user profile
router.get('/showOne/:id', usersController.getUser);

// User Login
router.get("/login", usersController.getLoginDetails);
router.post("/login", usersController.loginUser);

// User Logout
router.post("/logout", securityMiddleware.checkPermission, usersController.logoutUser);

// Create a user profile
router.post('/create', usersController.createUser);

module.exports = router;
