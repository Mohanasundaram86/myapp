const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
   
/*------------------------------------------
--------------------------------------------
parse application/json
--------------------------------------------
--------------------------------------------*/
app.use(bodyParser.json());
   
/*------------------------------------------
--------------------------------------------
Database Connection
--------------------------------------------
--------------------------------------------*/
const conn = mysql.createConnection({
  host: 'database-1.csv5ovrnscx1.us-east-1.rds.amazonaws.com',
  user: 'admin', /* MySQL User */
  port: 3306,
  password: 'Ezhil2020', /* MySQL Password */
  database: 'labrds', /* MySQL Database */
  "connectTimeout": 30000
});
   
/*------------------------------------------
--------------------------------------------
Shows Mysql Connect
--------------------------------------------
--------------------------------------------*/
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected with App...');
});
   
/**
 * Get All Items
 *
 * @return response()
 */
app.get('/api/items',(req, res) => {
  let sqlQuery = "SELECT * FROM items";
  
  let query = conn.query(sqlQuery, (err, results) => {
    if(err) throw err;
    res.send(apiResponse(results));
  });
});
   
/**
 * API Response
 *
 * @return response()
 */
function apiResponse(results){
    return JSON.stringify({"status": 200, "error": null, "response": results});
}
   
/*------------------------------------------
--------------------------------------------
Server listening
--------------------------------------------
--------------------------------------------*/
app.listen(3000,() =>{
  console.log('Server started on port 3000...');
});
