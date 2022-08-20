const express = require("express");
const routes = express.Router();
const blogController = require('../Controller/blogController');


//Uploading image to the db
const upload = require('../middleware/upload')

 
 //Receiving data from frontend sent it to database
 routes.post("/insert", upload.single('Image'), blogController.post_blog)
 
  //fetching all the data from the database to the frontend
  routes.get("/api",blogController.GettingAllBlogs )

  //fetching a single blog
  routes.get('/api/:id', blogController.GettingASingleBlog )


  

  module.exports = routes;
 
 