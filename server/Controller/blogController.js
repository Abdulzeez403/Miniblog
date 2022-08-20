const  schematic = require("../Models/schema");


const post_blog = async(req, res)=>{
    const Title =req.body.Title;
    const Description =req.body.Description;
    const Body =req.body.Body;
    const Author =req.body.Author;
    const Image =req.body.Image;
    if(req.file){
      Blogs.Image = req.file.path
    }
  
     try{
    const Blogs = new schematic({ 
      Title: Title,
      Description: Description,
      Body:Body, 
      Author: Author,
      Image: Image
      });

   


    await  Blogs.save();
    res.send("Inserted Successfully");
   
    }catch(err){
    console.log(err);
    }
   
    }
 const GettingAllBlogs =async(req, res)=>{
  try{
   schematic.find({}, (err, result)=>{
    err? res.send(err): res.send(result);
   })
  }catch(err){
    throw err;
   }
 }
 const GettingASingleBlog =  (req, res) =>{
  const id = req.params.id;
//  console.log(id);
  schematic.findById(id)
   .then((result)=>{
    res.send(result)
  })
  .catch((err)=>{
    console.log(err)
  })
}

 module.exports ={
  post_blog,
  GettingAllBlogs,
  GettingASingleBlog
 }