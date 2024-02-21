const modelDatasets = require('../models/datasets');

module.exports = {
    // getAllUsers,
    // getUser,
    createDataset,
    // updateUser,
    // deleteUser
}

// async function getAllUsers(req, res) {
//     try {
//         const userData = await modelUsers.getAllUsers(req.query);
//         res.json({ users: userData });
//     } catch(err) {
//         res.status(500).json({ errorMsg: err.essage });
//     }
// }

// async function getUser(req, res) {
//     try {
//         const user = await modelUsers.getUser(req.params.id);
//         res.json({ user: user });
//     } catch(err) {
//         console.log(err);
//         res.status(500).json({ errorMsg: err.message });
//     }
// }

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

// async function deleteUser(req, res) {
//     try {
//        await modelUsers.deleteUser(req.params.id);
//        res.status(200).json({ message: "User deleted successfully." });
//     } catch(err) {
//         console.log(err);
//         res.status(500).json({ errorMsg: err.message });
//     }
// }