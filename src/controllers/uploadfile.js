const db = require('../models')
const path = require('path')
const uploads = async (req, res, next) =>{
    const file = req.file
    if (file == undefined) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
    var name = path.basename(file.path)
    var link = path.posix.join("assets", name)
    res.send("Upload successfully");
    db.model.create({
      type: file.mimetype,
      name: file.originalname,
      path: link,
    }).then();
  }
  module.exports = uploads; 
