const mongoose = require("mongoose");
const PostDetail = new mongoose.Schema({
 Title:{
  type: String,
  required: true
 },

 Description:{
  type: String,
  required: true
 },

 Body:{
  type: String,
  required: true
 },

  Author:{
  type: String,
  required: true
 }

 /*Image:{
  type: Image,
  required: true
 }*/
 
 
}, {timestamp: true});
const schematic = mongoose.model("BlogData",  PostDetail) 
module.exports = schematic;