const express = require("express");
const routes = express.Router();
const blogController = require('../Controller/blogController');


 
 //Receiving data from frontend sent it to database
 routes.post("/insert",  blogController.post_blog)
 
  //fetching all the data from the database to the frontend
  routes.get("/api",blogController.GettingAllBlogs )

  //fetching a single blog
  routes.get('/api/:id', blogController.GettingASingleBlog )

  //Update a single blog
  routes.post('/update/:id', blogController.updateSingleBlog)


  

  module.exports = routes;
 
 