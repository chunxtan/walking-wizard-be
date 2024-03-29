const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    datasets: [{
        type: Schema.Types.ObjectId,
        ref: 'Dataset'
    }],
    scenarios: [{
        type: Schema.Types.ObjectId,
        ref: 'Scenario'
    }],
    bookmarks: [{
        type: Schema.Types.ObjectId,
        ref: 'Scenario'
    }],
    salt: {
      type: String,
      required: true,
    },
    iterations: {
      type: Number,
      required: true,
    },
    token: {
      type: String
    },
    expire_at: {
      type: Number
    },  
    is_admin: {
      type: Boolean,
      default: false
    }
}, 
    {
    timestamps: true
    }
);

module.exports = mongoose.model("User", userSchema);