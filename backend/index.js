const express =require('express')
const cors=require('cors');
const app=express()
app.use(cors());
const port=4000;
 const mongoDB=require('./db')
 mongoDB();
 app.use('/Login',(req,res)=>{
     res.send({
         token:'test123'
     });
 });
app.listen(port,()=>console.log('API is running on http://localhost:4000/Login'));
// const port=5000
// const mongoDB=require('./db')
// mongoDB();
// app.get('/',(req,res)=>(
//     res.send("hello world")
// ))
// app.use(express.json())
// app.use('/api',require('./Routes/CreateUser'));
// app.listen(port,()=>(
//     console.log(`example app listening on port ${port}`)
// ))