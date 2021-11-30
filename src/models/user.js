const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    userName: String,
    userAddress: String,
    userAccount: String,
    userJoinedRooms: [mongoose.Schema.Types.ObjectId]
  }, {timestamps: true});
  const TodoModel = mongoose.model("user", schema);
  
  module.exports = TodoModel