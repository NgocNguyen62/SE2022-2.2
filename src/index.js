const express = require('express');
const session = require('express-session');
const path = require('path');
const db = require("./config/config");
const PORT = 5500;
const app = express();

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(express.static(path.join(__dirname+ '/public')));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("view engine", "pug");
app.set("views", "./views");
db.connect((err) => {
    if (err) throw err;
    console.log("database connected");
})
app.use("/", require("./routers/page"));
app.use("/auth", require("./controllers/login"))
app.get('/upload', function(req, res){
    res.redirect('/login')
})
const model = require("./models");
model.sequelize.sync();
app.use('/uploadfile', require("./routers/page"))
//app.use('/edit', require("./controllers/edit"))
app.use('/build/', express.static(path.join(__dirname, 'node_modules/three/build')));
app.use('/jsm/', express.static(path.join(__dirname, 'node_modules/three/examples/jsm')));

app.listen(PORT);