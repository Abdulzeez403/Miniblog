const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Blogroutes = require("./Routers/Blogroutes");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json({ extend: true }));
//routess
app.use(Blogroutes);

// middleware
// app.use('/uploads', express.static('uploads'))

//connect to the mongodb
mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then((result) => {
    app.listen(process.env.PORT, (req, res) => {
      console.log(`This Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
