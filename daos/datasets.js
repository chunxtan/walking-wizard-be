const mongoose = require("mongoose");
const { stringify } = require("querystring");
const Schema = mongoose.Schema;

const pointSchema = new Schema({
  type: {
    type: String,
    required: true,
    enum: "Point"
  },
  coordinates: {
    type: [Number],
    required: true
  }
})

const propertiesSchema = new Schema({
  name: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  }
})

const featureSchema = new Schema({
  type: {
    type: String,
    required: true,
    enum: "Feature"
  },
  properties: propertiesSchema,
  geometry: pointSchema
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