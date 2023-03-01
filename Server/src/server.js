import app from "./app.js";
import listEndpoints from "express-list-endpoints";
import mysql from "mysql";
import {createConnection} from 'mysql';


const connection = mysql.createConnection({
    host:  "127.0.0.1",
     user: 'root',
     password: 'root',
     database: 'mvp_app'
   });

connection.query('SELECT * FROM `users`', function (error, results, fields) { console.log(results);});


const port = process.env.PORT || "5002";
app.listen(port,() => {
console.table(listEndpoints(app))
console.log("Server is running on port:", port)
});