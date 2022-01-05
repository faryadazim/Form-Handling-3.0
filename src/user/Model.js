var mongoose = require("mongoose");
var userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "post Title Required"],
  },
  course: {
    type: String,
  },
  roll: {
    type: Number,
  },
});

var user = mongoose.model("users", userSchema);
module.exports = user;

// import mongoose from 'mongoose';
//   const { Schema } = mongoose;

//   const blogSchema = new Schema({
//     title:  String, // String is shorthand for {type: String}
//     author: String,
//     body:   String,
//     comments: [{ body: String, date: Date }],
//     date: { type: Date, default: Date.now },
//     hidden: Boolean,
//     meta: {
//       votes: Number,
//       favs:  Number
//     }
//   });
