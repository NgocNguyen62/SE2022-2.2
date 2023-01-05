const express = require("express");
const router = express.Router();
const path = require('path')
router.get("/", (req, res) => {
    res.sendFile("home.html", {root: "./views/"});
});
router.get("/login", (req, res) => {
    res.sendFile("login.html", {root: "./views/"})
})
router.get('/present', (req, res) => {
    res.sendFile('demo.html', {root: "./views/"})
})
router.get('/uploadfile', (req, res) => {
    res.sendFile('upload.html', {root: "./views/"})
})

const upload = require('../controllers/upload')
const cloud = require('../config/cloud')
router.post('/')

module.exports = router;