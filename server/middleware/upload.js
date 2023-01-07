const path = require('path');
const multer = require('multer');

var storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, '../BlogImage')
  },
  filename: function(req, file, cb){
    // let ext =path.extname(file.originalname)
    // cb(null, Date.now() + ext)
    cb(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);

  }
}) 

var upload =multer({storage: storage}).single('Image');
module.exports = upload;