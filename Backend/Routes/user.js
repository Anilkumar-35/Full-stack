const express= require("express")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const bcrypt = require("bcryptjs")
const { User } = require("../db")

const userdata= express.Router()



userdata.post("/signup",async(req,res)=>{
    const body =req.body
    const salt =bcrypt.genSaltSync(10)
    const password = bcrypt.hashSync(body.password,salt)
    try {
        const usersing= await User.findOne({email:body.email})
        if(usersing){
            return res.status(403).json({msg:"user already Exists"})
        }
        const response = await User.create({
            firstname:body.firstname,
            lastname:body.lastname,
            email:body.email,
            password:password
        })

        const token = jwt.sign(response._id.toHexString(),process.env.SECRET_KEY)
        res.json({token})
    } catch (error) {
        console.log(error)
        res.status(403).json({msg:"Error in Signup"})
        
    }
    
})
userdata.post("/signin",async(req,res)=>{
    const body =req.body
    try {
        const singuser= await User.findOne({email:body.email})
        if (!singuser){
            return res.status(401).json({msg:"user Not Exist "})
        }
        const checkpassword = bcrypt.compareSync(body.password,singuser.password)
        if(!checkpassword){
            return res.status(403).json({msg: "invalid Password "})
        }
        const token = jwt.sign(singuser._id.toHexString(),process.env.SECRET_KEY)
        res.json({token})
        
    } catch (error) {
        console.log(error)
        res.status(403).json({msg:"Error in Sigin"})
    }
})

module.exports = userdata