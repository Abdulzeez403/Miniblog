const express = require("express");
const routes = express.Router();
const  schematic = require("../Models/schema");
 
 
 
 
 //Receiving data from frontend sent it to database
 routes.post("/insert",  async(req, res)=>{
  const Title =req.body.Title;
  const Description =req.body.Description;
  const Body =req.body.Body;
  const Author =req.body.Author;
  const Image =req.body.Image;
   
   try{
  const Blogs = new schematic({ Title: Title, Description: Description, Body:Body,  Author: Author, Image: Image});
  await  Blogs.save();
  res.send("Inserted Successfully");
 
  }catch(err){
  console.log(err);
  }
 
  })
 
 
  //fetching all the data from the database to the frontend
  routes.get("/api",async(req, res)=>{
   try{
    schematic.find({}, (err, result)=>{
     err? res.send(err): res.send(result);
    })
   }catch(err){
     throw err;
    }
  } )

  //fetching a single blog
  routes.get('/api/:id', (req, res) =>{
    const id = req.params.id;
  //  console.log(id);
    schematic.findById(id)
     .then((result)=>{
      res.send(result)
    })
    .catch((err)=>{
      console.log(err)
    })
  })

  

  module.exports = routes;
 
 