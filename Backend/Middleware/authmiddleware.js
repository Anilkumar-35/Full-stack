const jwt = require("jsonwebtoken")
require("dotenv").config()
function authmiddleware (req,res,next){
    const token = req.headers.authorization 
    console.log(token)
    try {
        const verifyId = jwt.verify(token,process.env.SECRET_KEY)
    if(verifyId){
        req.userId= verifyId
        next()
    }else{
        return res.status(403).json({msg: "not verified" })
    }
        
    } catch (error) {
        console.log("eror while validating", error)
        return res.status(403).json({msg:"not verifyed"}) 
        
    }
    
}
module.exports=authmiddleware