const daoDatasets = require("../daos/datasets");
const utilSecurity = require("../util/security");

module.exports = {
    // getAllUsers,
    // getUser,
    createDataset,
}

// function getAllUsers(queryFields) {
//     return daoUsers.find(queryFields);
// }

// async function getUser(id) {
//   try {
//       const user = await daoUsers.findById(id);

//       if (!user) {
//           throw new Error('User not found');
//       }

//       return {
//           _id: user._id,
//           firstName: user.firstName,
//           lastName: user.lastName,
//           email: user.email,
//           password: user.password,
//           datasets: user.datasets,
//           scenarios: user.scenarios,
//           bookmarks: user.bookmarks
//       }
//   } catch(err) {
//       console.log(err);
//       throw new Error(err.message || "An error occurred");
//   }
// }

async function createDataset(body) {
    // Check if dataset already exists in DB
    const dataset = await daoDatasets.findOne({ "title": body.email });
    if (dataset) {
        return { success: false, error: "Dataset with title already exists." }
    } 

    // If new user, create user profile
    const newDataset = await daoDatasets.create(body);
    return { success: true, data: newDataset };
}

// async function updateUser(id, profile) {
//     const updatedProfile = await daoUsers.findByIdAndUpdate(id, profile, { new: true });
//     return updatedProfile;
// }   

// async function deleteUser(id) {
//     await daoUsers.findByIdAndDelete(id);
// }