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
  const title = req.body.Title;
  const description = req.body.Description;
  const body = req.body.Body;
  const author = req.body.Author;
  // const updateThis = {
  //   title,
  //   description,
  //   body,
  //   author,
  // }

  schematic.findByIdAndUpdate(
    id,
    {
      title: "names",
      description: "descrpting",
      body: "the body",
      auhor: "mine",
    },
    { new: true },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log("update.." + data);
      }
      console.log(data);
    }
  );
};

module.exports = {
  post_blog,
  GettingAllBlogs,
  GettingASingleBlog,
  updateSingleBlog,
};
