const mongoose = require("mongoose");
const PostDetail = new mongoose.Schema({
 Title:{
  type: String,
  required: true
 },

 Description:{
  type:String,
},

 Body:{
  type: String,
  required: true
 },

  Author:{
  type: String,
  required: true
 },

 Image:{
  type: String
 }

 
 
}, {timestamps: true});
const schematic = mongoose.model("BlogData",  PostDetail) 
module.exports = schematic;