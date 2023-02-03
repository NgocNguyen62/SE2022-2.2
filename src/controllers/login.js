const express = require("express");
const db = require("../config/config");
login = function(request, response){
    let username = request.body.username;
    let password = request.body.password;
    if(username && password){
        db.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
            if (error) throw error;
            if (results.length > 0) {
                request.session.loggedin = true;
                response.redirect('/uploadfile');
            } else {
                //alert("dang nhap that bai");
				response.send('Incorrect Username and/or Password!');
			}	
            response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}		
}
module.exports = login;