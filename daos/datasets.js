const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const featureSchema = new Schema({
  type: "Feature",
  properties: {},
  geometry: {
    type: "Point",
    coordinates: [number]
  }
});

const datasetSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    features: [featureSchema]
}, 
    {
    timestamps: true
    }
);

module.exports = mongoose.model("Dataset", datasetSchema);