const express=require('express')
const router=express.Router();
const User=require('../models/User')
 

//Create user using  POST: "/api/auth". Doesnt require auth
router.post('/createuser',async (req,res)=>{

    console.log(req.body);
   
    const user=User(req.body);
    try{
      await user.save().then(()=>{
        res.status(200).json({
          success:true
        })
        console.log("Successfuly saved");

      })
    }
  catch(e){
    console.log(e);
    res.status(400).json({
      success:false,
      message:e.message
    })
     
  }
     

})


module.exports=router