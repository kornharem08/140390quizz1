
var express = require('express');
var app = express();
var mysql = require('mysql')
app.set('view engine','ejs');

var connection = mysql.createConnection({
  host     : 'www.db4free.net',
  user     : 's140390',
  password : 'abc123**',
  database : 'db140390'
});
connection.connect()
app.get('/', function (request, response) {
    response.render('pages/Homepage');
});




app.get('/students', function (request, response) {
    var connection = mysql.createConnection({
        host     : 'www.db4free.net',
        user     : 's140390',
        password : 'abc123**',
        database : 'db140390'
      });
      connection.connect()
    var sql = 'select * from students';
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        response.render('pages/students',{students : rows});
    });
     

});

app.get('/subjects', function (request, response) {
    var connection = mysql.createConnection({
        host     : 'www.db4free.net',
        user     : 's140390',
        password : 'abc123**',
        database : 'db140390'
      });
      connection.connect()
    var sql = 'select * from subjects';
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        response.render('pages/subjects',{subjects : rows});
    });
     

});




connection.end();

console.log('App is running at http://localhost:8080');
app.listen(8080);


