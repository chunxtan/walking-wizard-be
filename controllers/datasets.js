const modelDatasets = require('../models/datasets');

module.exports = {
    getAllUserDatasets,
    createDataset,
    // updateUser,
    deleteDataset
}

async function getAllUserDatasets(req, res) {
    try {
        const userId = req.params.userId;
        const datasetData = await modelDatasets.getAllUserDatasets(userId);
        res.json({ datasets: datasetData });
    } catch(err) {
        res.status(500).json({ errorMsg: err.essage });
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

// async function updateUser(req, res) {
//     try {
//         const updatedProfile = await modelUsers.updateUser(req.params.id, req.body);
//         res.status(200).json(updatedProfile);
//     } catch(err) {
//         console.log(err);
//         res.status(500).json({ errorMsg: err.message });
//     }
// }

async function deleteDataset(req, res) {
    try {
       await modelDatasets.deleteDataset(req.params.id);
       res.status(200).json({ message: "Dataset deleted successfully." });
    } catch(err) {
        console.log(err);
        res.status(500).json({ errorMsg: err.message });
    }
}