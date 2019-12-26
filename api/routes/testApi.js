var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'admin',
  password : 'password',
  database: 'hackker'
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  var username = 'username'
  var password = 'password'
  var retVal;

  connection.query('SELECT * FROM users U WHERE U.username = "'+ username +'" AND U.password="'+password+'"', function(err, result) {
    if (err) throw err;
    if(result[0] != null){
      retVal = { id: 'yes'}
    }
    else {
      retVal = {id: 'no'}
    }

    res.send(retVal)
  });
});

module.exports = router;
