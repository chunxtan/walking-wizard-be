var express = require('express');
var datasetsController = require('../controllers/datasets');
var router = express.Router();
var securityMiddleware = require('../middlewares/security');

// base path: /datasets

// Show all datasets
router.get('/show/:userId', securityMiddleware.checkLogin, datasetsController.getAllUserDatasets);
router.get('/show/:datasetId', securityMiddleware.checkLogin, datasetsController.getDataset)

// Create a dataset
router.post('/create', securityMiddleware.checkLogin, datasetsController.createDataset);

// Update a dataset
router.patch('/update/:id', securityMiddleware.checkLogin, datasetsController.updateDataset);

// Delete a dataset
router.delete('/delete/:id', securityMiddleware.checkLogin, datasetsController.deleteDataset);

module.exports = router;
