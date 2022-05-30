// declare var require: any

import moment from "moment";
const mongoose = require("mongoose");

const postScehma = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  userImage: {
    type: String,
  },
  userId: {
    type: String,
  },

  postImage: {
    type: String,
  },

  date: {
    type: Date,
    default: moment().toDate(),
  },

  text: {
    type: String,
  },
});

// module.exports = mongoose.model("users", user);
export default mongoose.model("post", postScehma);
