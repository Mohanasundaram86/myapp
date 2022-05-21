var express    = require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'labrds.csv5ovrnscx1.us-east-1.rds.amazonaws.com',
  port      :  3306,
  user     : 'admin',
  password : 'Ezhil2020',
  database : 'LabRDS'

});
var app = express();

connection.connect(function(err){

if(!err) {
    console.log("Database is connected ... ");    
} else {
    console.log("Error connecting database ... ");    
}
});

app.get('/api/items',(req, res) => {
  let sqlQuery = "SELECT * FROM items";
  
  let query = conn.query(sqlQuery, (err, results) => {
    if(err) throw err;
    res.send(apiResponse(results));
  });
});