const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: "localhost",
    user: "Ngoc",
    password: "Bichngoc622",
    database: "nodelogin"
});
module.exports = connection;
