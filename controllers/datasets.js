const modelDatasets = require('../models/datasets');

module.exports = {
    getAllUserDatasets,
    getDataset,
    createDataset,
    updateDataset,
    deleteDataset
}

async function getAllUserDatasets(req, res) {
    try {
        const userId = req.params.userId;
        const datasetData = await modelDatasets.getAllUserDatasets(userId);
        res.json({ datasets: datasetData });
    } catch(err) {
        res.status(500).json({ errorMsg: err.message });
    }
}

async function getDataset(req, res) {
    try {
        const datasetId = req.params.backendId;
        const datasetData = await modelDatasets.getDataset(datasetId);
        res.json({ dataset: datasetData });
    } catch(err) {
        res.status(500).json({ errorMsg: err.message })
    }
}

async function createDataset(req, res) {
    try {
        const datasetData = await modelDatasets.createDataset(req.body);
        
        res.status(201).json(datasetData);
        console.log(datasetData);
    } catch(err) {
        console.log(err);
        res.status(500).json({ errorMsg: err.message });
    }
}

async function updateDataset(req, res) {
    try {
        const updatedDataset = await modelDatasets.updatedDataset(req.params.id, req.body);
        res.status(200).json(updatedDataset);
    } catch(err) {
        console.log(err);
        res.status(500).json({ errorMsg: err.message });
    }
}

async function deleteDataset(req, res) {
    try {
       await modelDatasets.deleteDataset(req.params.id);
       res.status(200).json({ message: "Dataset deleted successfully." });
    } catch(err) {
        console.log(err);
        res.status(500).json({ errorMsg: err.message });
    }
}