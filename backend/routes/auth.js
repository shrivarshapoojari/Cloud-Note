const express=require('express')
const router=express.Router();
const User=require('../models/User')

//Create user using  POST: "/api/auth". Doesnt require auth
router.post('/',async (req,res)=>{

    console.log(req.body);
    res.status(200).json(req.body);
    const user=User(req.body);
  await  user.save().then(()=>{
    console.log("Successfully saved")
  }).catch((e)=>{
    console.log(e);
  })
     

})


module.exports=router