const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    roomName: {
      type: String,
      required: true,
    },
    roomNumberofPeople: {
      type: Number,
      default: 1,
      required: true,
    },
    restaurant: {
      type: String,
      required: true,
    },
    maxPeople: {
      type: Number,
      default: 10,
      required: true,
    },
    roomjoinedPeople:{
      type: [mongoose.Schema.Types.ObjectId],
      required: true,
    }
  }, {timestamps: true});
  const TodoModel = mongoose.model("room", schema);
  
  module.exports = TodoModel