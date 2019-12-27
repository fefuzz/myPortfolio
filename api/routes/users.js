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
router.post('/', function(req, res, next) {

  var username = req.body.username
  var password = req.body.password

  connection.query('SELECT * FROM users U WHERE U.username = "'+ username +'" AND U.password="'+password+'"', function(err, result) {
    if (err) throw err;
    if(result[0] != null && result[0].username==='username'){
      console.log('Requested Exist')
      retVal = { user: 'ADMIN_EXIST' }
    }
    else if(result[0]!= null && result[0].username!='username'){
      console.log('Requested Exist')
      retVal = { user: 'USER_EXIST' }
    }
    else {
      console.log('Requested not Exist')
      retVal = { user: 'USER_NOT_EXIST' }
    }

    res.send(retVal)
  });

});

module.exports = router;
