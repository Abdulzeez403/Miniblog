const express = require("express");
const routes = express.Router();
const blogController = require("../Controller/blogController");



//Receiving data from frontend sent it to database
routes.post("/insert", blogController.post_blog);

//fetching all the data from the database to the frontend
routes.get("/api", blogController.GettingAllBlogs);


//Update a single blog
routes.post("/update/:id", blogController.updateSingleBlog);


// Delete a single blog
routes.delete("/delete/:id", blogController.deleteSingleBlog);

//fetching a single blog
routes.get("/api/:id", blogController.GettingASingleBlog);


module.exports = routes;
