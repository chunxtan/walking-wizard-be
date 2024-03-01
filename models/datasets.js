const daoDatasets = require("../daos/datasets");
const utilSecurity = require("../util/security");

module.exports = {
    getAllUserDatasets,
    // getUser,
    createDataset,
    updatedDataset,
    deleteDataset
}

async function getAllUserDatasets(userId) {
    const datasets = await daoDatasets.find({ userId: userId });

    return datasets;
}

async function createDataset(body) {
    // Check if dataset already exists in DB
    const dataset = await daoDatasets.findOne({ "title": body.title });
    if (dataset) {
        return { success: false, error: "Dataset with title already exists." }
    } 

    // If new user, create user profile
    const newDataset = await daoDatasets.create(body);
    return { success: true, data: newDataset };
}

async function updatedDataset(id, dataset) {
    const updatedDataset = await daoUsers.findByIdAndUpdate(id, dataset, { new: true });
    return updatedDataset;
}   

async function deleteDataset(id) {
  try {
    await daoDatasets.findByIdAndDelete(id);
  } catch(err) {
    console.error(err);
  }
}