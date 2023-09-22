const express=require('express')
const router=express.Router();
const User=require('../models/User')
 const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken')


const JWT_SECRET="Shripoojar"
//Create user using  POST: "/api/auth". Doesnt require auth
router.post('/createuser',async (req,res)=>{

    console.log(req.body);
   const salt=  await bcrypt.genSalt(10) // generates a salt
    secPass=  await bcrypt.hash(req.body.password,salt) 

    // create user
      
    try
    {
       const user=await  User.create({
        name:req.body.name,
        password:secPass,
        email:req.body.email
       })
        console.log("Successfuly saved");
         
    }
   catch(e)
   {
    console.log(e);
    res.status(400).json({
      success:false,
      message:e.message
    })
     
  }


  const user=  await User.findOne({name:req.body.name})
  const data={
    user:{
      id:user.id
    }
  }
  const authtoken=jwt.sign(data,JWT_SECRET)
   res.json(authtoken);
     

})


module.exports=router