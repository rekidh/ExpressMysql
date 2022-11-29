** jenis request **

- ini adalah jenis request param
  - `http://123.123.1.22:3000/home/1`
  - pengunaan

```
      app.get('/home/:id,(req,res)=>{
         console.log(req.param.id)
      })
```

- ini adalah request query param
  - ` http://123.123.1.22:3000/home?id=1`
  - pengunaan
  ```
  app.get('/home,(req,res)=>{
        console.log(req.query.id)
     })
  ```
  yang terakhir adalah request body yang di kirm dari JSON
