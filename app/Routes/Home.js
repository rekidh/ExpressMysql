const express = require('express');
const router = express.Router()
const dbConn = require('../Config/Connection.db')
const home = require('../Controllers/Home');

router
   .get('/home',home.get)
   .post('/add',home.add)
   .get('/search',home.search)
   .get('/delete',home.delete)
   .get('/:id',home.requestParam)

module.exports=router