 const multer = require('multer')
 const db = require('../config/config')
 var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/assets/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
var upload = multer({ storage: storage })
uploads = upload.single('myFile'), (req, res, next) =>{
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  } else {
    console.log('file received')
    console.log(req)
    var sql = "INSERT INTO `file_upload`(`id`,`path_file`) VALUES ('" + file.filename + "', '"+file.size+"')"
  }
  
  res.send(file)
}

module.exports=uploads;