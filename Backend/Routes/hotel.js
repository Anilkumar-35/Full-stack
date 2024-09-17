const express = require("express");
const { Queries, Room, User } = require("../db");
const hotelRouter = express.Router()
const authMiddleware =require("../Middleware/authmiddleware")
hotelRouter.post("/contact", async(req, res)=>{
    const body= req.body;
    try {
        const response = await Queries.create({
            name:body.name,
            email: body.email,
            phone: body.phone,
            querriesRelatedTo:body.querriesRelatedTo,
            resolved: false

        })
        res.json({msg:"Add Queries succesfully"})
    } catch (error) {
        console.log(error)
        res.json({msg: "error while puuting queries"})
        
    }
})
hotelRouter.post("/bookroom",authMiddleware, async(req,res)=>{
    const {fromDate, toDate,roomType,guests }= req.body;
    const userId= req.userId;
    console.log(roomType)
    try {
        const bookedBy= await User.findOne({_id:userId})
        console.log(typeof(bookedBy))
        const  response = await Room.create({
            formDate: fromDate,
            todate: toDate,
            roomtype : roomType,
            guest:guests,
            bookedBy: JSON.stringify(bookedBy) 
        })
        res.json({msg:"Booked successfully"})
    } catch (error) {
        console.log(error,"error while booking")
        res.json(401).json({msg:"error while bokking "})
        
    }

})
hotelRouter.post("/checkavailibility",async(req,res)=>{
    const {fromDate ,toDate,guests}= req.body;
    try {
        const checkFromDate= parseInt(fromDate.slice(8,10))
        const checkFromMonth=parseInt(fromDate.slice(5,8))
        const checkToDate = parseInt(toDate.slice(8,10))
        const checkToMonth = parseInt(toDate.slice(5,8))
        const bookedRooms = await Room.find({})
        console.log(bookedRooms)
        const acRoom =bookedRooms.map((item)=>{
            const BookedFromDate = parseInt(item.formDate.slice(8,10))
            const BookedFromMonth = parseInt(item.formDate.slice(5,8))
            const BookedToDate = parseInt(item.todate.slice(8,10))
            const BookedToMonth = parseInt(item.todate.slice(5,8))
            if(BookedFromDate<=checkFromDate &&BookedFromMonth<=checkFromMonth && BookedToDate<=checkToDate && BookedToMonth<=checkToMonth && item.roomtype==="ac"){
                return item
            }
        })
        console.log(acRoom)
        const nonAcRoom =bookedRooms.map((item)=>{
            const BookedFromDate = parseInt(item.formDate.slice(8,10))
            const BookedFromMonth = parseInt(item.formDate.slice(5,8))
            const BookedToDate = parseInt(item.todate.slice(8,10))
            const BookedToMonth = parseInt(item.todate.slice(5,8))
            
            if(BookedFromDate<= checkFromDate && BookedFromMonth <=checkFromMonth && BookedToDate>=checkToDate && BookedToMonth >=checkToMonth && item.roomType === "nonac" ){
                return item
            }
        })
        console.log(nonAcRoom)

        if(acRoom.lenth===5 && nonAcRoom === 5){
            return res.json({
                ac: false,
                nonac: false
            })
        }
        else if(acRoom.length===5&& nonAcRoom.lenth <5){
            return res.json({
                ac:false,
                nonac:true
            })
        }
     else if(acRoom.length < 5 && nonAcRoom.length ===5){
        return res.json({
            ac: true,
            nonac: false
        })
    }else{
        return res.json({
            ac: true,
            nonac: true
        })
    }


} catch (error) {
    console.log("error while checking availability",error);
    return res.status(401).json({msg: "error while checking availability"})
}
})

module.exports = hotelRouter

