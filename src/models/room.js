const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    roomName: String,
    roomNumberofPeople: {
      type: Number,
      default: 1
    },
    roomMax: {
      type: Number,
      default: 10
    },
    roomjoinedPeople:[mongoose.Schema.Types.ObjectId]
  }, {timestamps: true});
  const TodoModel = mongoose.model("room", schema);
  
  module.exports = TodoModel