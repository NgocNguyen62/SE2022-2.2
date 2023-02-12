const express = require("express");
const router = express.Router();
const path = require('path')
const db = require("../config/config");
router.get("/", (req, res) => {
    //res.sendFile("home.html", {root: "./views/"});
    let sql = `select * from models`;
    db.query(sql, (err, data) => {
        if(err) throw err
        res.render('page', {title: "Home page", models:data})
    })
    
});
router.get("/login", (req, res) => {
    res.sendFile("login.html", {root: "./views/"})
})
router.get('/present', (req, res) => {
    //res.sendFile('demo.html', {root: "./views/"})
    let createDb = `CREATE TABLE IF NOT EXISTS 'models' ('id' INTEGER NOT NULL auto_increment , 'type' VARCHAR(255), "name" VARCHAR(255), 'path' VARCHAR(255), 'createdAt' DATETIME NOT NULL, 'updatedAt' DATETIME NOT NULL, PRIMARY KEY ('id')) ENGINE=InnoDB`
    let id = req.query.id;
    id = parseInt(id, 10);
    let model = `select * from models where id =${id}`;
    db.query(model, (err, data) => {
        if(err) throw err
        console.log(data)
        res.render('present', {models:data}) 
    })
}) 

router.get('/edit', (req, res) => {
    res.sendFile('edit.html', {root: "./public/"})
})

router.get('/uploadfile', (req, res) => {
    res.sendFile('upload.html', {root: "./views/"})
})

const upload = require('../controllers/upload')

const uploadController = require("../controllers/uploadfile");
const { title } = require("process");
//const upload = require("../controllers/upload")
router.post('/uploadfile', upload.single("myFile"), uploadController)

module.exports = router;