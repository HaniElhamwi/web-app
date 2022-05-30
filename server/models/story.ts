import moment from "moment";
 import mongoose  from 'mongoose'
 
interface props {
  date: any;

  // startOf():any
}

const story = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  userImage: {
    type: String,
  },

  postImage: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now(),
    required:true
  },
});

// module.exports = mongoose.model("users", user);
// export default  
export default mongoose.model("stories", story);