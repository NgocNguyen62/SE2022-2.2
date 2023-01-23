const multer = require('multer')
const db = require('../models')
const fs = require("fs")
//const model = db.model;
var storage = multer.diskStorage({
 destination: function (req, file, cb) {
   cb(null, 'public/assets/')
 },
 filename: function (req, file, cb) {
   cb(null,Date.now() + '-' + file.originalname)
 }
})
var upload = multer({ storage: storage })

module.exports=upload;