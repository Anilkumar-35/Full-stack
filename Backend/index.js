const express = require("express")
const userdata = require("./Routes/user")
const hotelRouter = require("./Routes/hotel")
const cors = require("cors")

require("dotenv").config()
const datauser= express()
datauser.use(cors())
datauser.use(express.json())


datauser.use("/user",userdata)
datauser.use("/hotel",hotelRouter)



datauser.listen(3005,()=>{
    console.log("port conencted")
})