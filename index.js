//setup 
// import express
const express = require('express');
const app = express();
const PORT = 5500;
//cors 
// ini cukup penting karna tanpa ada nya dependeci ini kamu akan terkena cosr error
const cosr = require('cors')
app.use(cosr());
//setup body parser
app.use(express.json());
app.use(express.urlencoded({
  extended:true
}));

//end point
app.use(require('./app/Routes/Home')) //use Routes

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})