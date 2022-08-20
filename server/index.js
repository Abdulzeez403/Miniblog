const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Blogroutes = require('./Routers/Blogroutes')
const cors = require("cors");
const port = 3003;
// const dotenv = require('dotenv').config();


app.use(cors());
app.use(express.json( {extend: true}));
 //routess
app.use(Blogroutes)

app.use('/uploads', express.static('uploads'))

// mongodb url
const url = "mongodb+srv://sodiq:$Abdulazeez403@cluster0.4nvfeif.mongodb.net/?retryWrites=true&w=majority";
//connect to the mongodb
mongoose.connect(url, {useNewUrlParser: true})
.then((result)=>{ app.listen( port, (req, res)=>{
  console.log("Server & Database Running on Port 3003");
 })}).catch((err)=>{
  console.log(err)
 })



