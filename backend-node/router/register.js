const express = require("express")
const router = express.Router();
const mongoose = require("mongoose");
const user = require("../models/user");
const bcrypt = require("bcryptjs")
const usermodel = require("../models/user")
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../keys")


router.get("/",(req,res)=>{
    res.send("hello")
})

router.post('/signup',(req,res)=>{
    console.log(req.body.name)
    const {email,password} = req.body
     if(!email || !password){
        return res.status(422).json({error:"please add all fields"})
     }
     usermodel.findOne({email:email})
      .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"please already exist"})
        }
        bcrypt.hash(password,12).then(hashedpassword=>{
            const user = new usermodel({
                email,
                password:hashedpassword
            })
            user.save().then(user=>{
                res.json({message:"saved succesfully"})
            }).catch(err=>{
                console.log(err)
            })
          })
        })  
      .catch(err =>{
        console.log(err)
      })
   



})

router.post('/signin',(req,res)=>{
    const{email,password} = req.body
     if(!email || !password){
        res.status(422).json({error:"please add all the fields"})
     }
     usermodel.findOne({email:email})
     .then(savedUser=>{
        if(!savedUser){
       res.status(422).json({error:"invalid email or password"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(match=>{
            if(match){
                //res.json({message:"successfully signed in"})
                const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
                res.json({token})
            }else{
                res.json({message:"please enter valid details"})
            }
        }).catch(err=>{
            console.log(err)
        })
    })
     

})

module.exports = router