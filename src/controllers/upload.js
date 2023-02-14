const multer = require('multer')
const db = require('../models')
const fs = require("fs")
const path = require('path')
//const model = db.model;
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/assets/')
  },
  filename: function (req, file, cb) {
    cb(null,Date.now() + '-' + file.originalname)
  }
})
var upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb){
    if(path.extname(file.originalname) !== '.glb'){
      return cb(new Error("File .glb only"), false)
    }
    cb(null, true);
  }
})

module.exports=upload;