var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'admin',
  password : 'password',
  database: 'hackker'
});


router.post('/', function(req, res, next) {

    var username = req.body.reg_usr
    var password = req.body.reg_psw

    if(username === 'username'){
      res.send('USER_NOT_INSERTED')
    }

    else { 
      connection.query('INSERT INTO `users`(`username`, `password`) VALUES ("'+username+'","'+password+'")', 
      function(err, result) {
        if (err) throw err;
        res.send('USER_INSERTED')
      });
    }

});

module.exports = router;
