const connectToMongo=require('./db');
const express=require('express')
const app=express();




 connectToMongo();

 app.get("/",(req,res)=>{
    res.send("Hello")
 })










 app.listen(3000,()=>{
    console.log("Server Up on port 3000")
 })