const mongoose = require("mongoose");
const { stringify } = require("querystring");
const Schema = mongoose.Schema;


const featureSchema = new Schema({
  type: {
    type: String,
    required: true,
    enum: "Feature"
  },
  properties: {
    Name: {
      type: String,
      required: false
    },
    Description: {
      type: String,
      required: false
    }
  },
  geometry: {
    type: {
      type: String,
      required: true,
      enum: "Point"
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
});

const datasetSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    parentLayerId: {
      type: String,
      required: true
    },
    newFeatures: [featureSchema],
    deletedFeatures: [featureSchema]
}, 
    {
    timestamps: true
    }
);

module.exports = mongoose.model("Dataset", datasetSchema);