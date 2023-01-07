const schematic = require("../Models/schema");
//Uploading image to the db
const uploadImage = require("../middleware/upload");

const post_blog = async (req, res) => {
  const Title = req.body.Title;
  const Description = req.body.Description;
  const Body = req.body.Body;
  const Author = req.body.Author;
  // const Image = req.file.path;
  // if (req.file) {
  //   Blogs.Image = req.file.path;
  // }

  try {
    const Blogs = new schematic({
      Title: Title,
      Description: Description,
      Body: Body,
      Author: Author,
      // Image: Image,
    });

    await Blogs.save();
    res.send("Inserted Successfully");
  } catch (err) {
    console.log(err);
  }
};

const GettingAllBlogs = async (req, res) => {
  try {
    schematic.find({}, (err, result) => {
      err ? res.send(err) : res.send(result);
    });
  } catch (err) {
    throw err;
  }
};
const GettingASingleBlog = (req, res) => {
  const id = req.params.id;
  //  console.log(id);
  schematic
    .findById(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateSingleBlog = (req, res) => {
  const id = req.params.id;
  const Title = req.body.title;
  const Description = req.body.description;
  const Body = req.body.body;
  const Author = req.body.author;
  // const updateThis = {
  //   Title: "namesssssssssss",
  //   Description:"des",
  //   Body:"bodying",
  //   Author:"ME"
  // };

  schematic.findByIdAndUpdate(
    id,
    {
      Title: "namesssssssssss",
      Description: "desssssssssss",
      Body: "bodying",
      Author: "ME",
    },
    (err, data) => {
      if (err) {
        res.send(err);
      } else {
        console.log("update.." + data);
      }
      console.log(data);
    }
  );
};

const deleteSingleBlog = async (req, res) => {
  const id = req.params.id;
 await schematic.findByIdAndRemove(id).exec();
  res.send("Deleted!")
  };

module.exports = {
  post_blog,
  GettingAllBlogs, 
  GettingASingleBlog,
  updateSingleBlog,
  deleteSingleBlog,
};
