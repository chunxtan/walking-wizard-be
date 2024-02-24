var express = require('express');
var datasetsController = require('../controllers/datasets');
var router = express.Router();
var securityMiddleware = require('../middlewares/security');

// base path: /datasets

// Show all datasets
router.get('/show/:userId', datasetsController.getAllUserDatasets);

// Create a dataset
router.post('/create', securityMiddleware.checkLogin, datasetsController.createDataset);

// Delete a dataset
router.delete('/delete/:id', securityMiddleware.checkLogin, datasetsController.deleteDataset);

module.exports = router;
