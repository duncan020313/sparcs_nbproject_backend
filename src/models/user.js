const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userAddress: {
    type: String,
    required: true,
  },
  userAccount: {
    type: String,
    required: true,
  },
}, {timestamps: true});
  
  module.exports = mongoose.model("user", schema);