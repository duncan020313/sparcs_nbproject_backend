const mongoose = require("mongoose");

const schema = new mongoose.Schema({
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
    userJoinedRooms: {
      type: [mongoose.Schema.Types.ObjectId],
      required: true,
    },
  }, {timestamps: true});
  const TodoModel = mongoose.model("user", schema);
  
  module.exports = TodoModel