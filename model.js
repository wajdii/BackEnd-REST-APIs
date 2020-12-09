const mysql = require('mysql2');

var connection = mysql.createPool({
    host:     'localhost',
    user:     'root',
    password: 'wajdi',
    database: 'ittrain'
  });

connection.getConnection(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('Connect MySQL DataBase IT-Train');
});


module.exports = connection;
