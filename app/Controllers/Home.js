const dbConn = require('../Config/Connection.db')
const ApiFormater = require('./Helper/ApiFormater')
const Respon = require('./Helper/ApiFormater')
 module.exports = {  
   get:(req,res,next)=>{
         const sqlquery = `SELECT * FROM penjualan `
         dbConn.query(sqlquery,(err,rows)=>{
            res.send(new ApiFormater(200,'ok',rows))
         })
         },
   search:(req,res,next)=>{
         const queryKey= Object.keys(req.query)
         const queryValue= Object.values(req.query)
         
         if(queryKey.length-1>0){
            res.send(new ApiFormater(200,"pencarian tidak falid"))
            return
         }
         const sqlquery = `SELECT * FROM penjualan WHERE ${queryKey}= ?`

         dbConn.query(sqlquery,queryValue,(err,rows)=>{
            res.send({
               err:err,
               data:rows
            })
         })
      },
   requestParam:(req,res,next)=>{
         const sqlquery = `SELECT * FROM penjualan WHERE uid= ?`
         dbConn.query(sqlquery,req.params.id,(err,rows)=>{
            res.send({
               err:err,
               data:rows
            })
         })
      },
   add:(req,res,next)=>{
      const [a,b,c] = Object.keys(req.body); //mengambil keydari data yang di kirim 
      const data = Object.values(req.body); // mengambil value dari data yang di kirim
   // karna bentuk dari objrct key adalah array maka kita lakukan destractur agar mudah di masukan ke dalam parameter query
      const sqlquery = `INSERT INTO penjualan (${a},${b},${c}) VALUE (?,?,?)`

      dbConn.query(sqlquery,data,(err,rows)=>{
         res.send({
            error:err,
            data:rows
         })
      })
   },
   delete:(req,res,next)=>{
       const queryKey= Object.keys(req.query)
       const queryValue= Object.values(req.query)
      if(queryValue==''){
         const sqlquery = `DELETE FROM penjualan WHERE ${queryKey}=?`
         dbConn.query(sqlquery,queryValue,(err,row)=>{
            res.send({
               i:err,
               s:row
            })
         })
      }
   }
 }

