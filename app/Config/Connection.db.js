//import lib mysql
const mysql= require('mysql');
//import dotenv
require('dotenv').config();
// setup connection to sql
const connection = mysql.createConnection({
   host:process.env.DB_HOST,
   user:process.env.DB_USER,
   password:process.env.DB_PASSWORD,
   database:process.env.DB_DATABASES
})
// create connection to sql
connection.connect(error=>{ 
   let messages= !error?'connect':'connection field check your DATABASES'
   console.log(`mysql : ${messages}`)
})
module.exports=connection