const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const  schematic = require("./schema");
const port = 3003;


app.use(cors());
app.use(express.json());


// mongodb url
const url = "mongodb+srv://sodiq:sodiq12345@cluster0.4nvfeif.mongodb.net/?retryWrites=true&w=majority";


//connect to the mongodb
mongoose.connect(url,
 {useNewUrlParser: true}
 );

 //Receiving data from frontend sent it to database

 app.post("/insert",  async(req, res)=>{
 const Title =req.body.Title;
 const Description =req.body.Desc;
 const Body =req.body.Body;
 const Author =req.body.Author;
  
  try{
 const Blogs = new schematic({ Title: Title, Description: Description, Body:Body,  Author: Author});
 await  Blogs.save();
 res.send("Inserted Successfully");

 }catch(err){
 console.log(err);
 }

 })


 //fetching all the data from the database to the frontend
 app.get("/api",async(req, res)=>{
  try{
   schematic.find({}, (err, result)=>{
    err? res.send(err): res.send(result);
   })
  }catch(err){
    throw err;
   }
 } )


app.listen( port, (req, res)=>{
 console.log("Server Running on Port 3003");
})