const mongoose =require("mongoose")

mongoose.connect("mongodb+srv://panda33402:a1n2i3l4@cluster0.1nad0ji.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
console.log("Mongoose Connected")
})

const userSchema= new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String
})
const queriesSchema= new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    querriesRelatedTo: String,
    resolved: Boolean
})
const roomSchema= new mongoose.Schema({
    formDate: String,
    todate: String,
    roomtype: String,
    guest: String,
    bookedBy:String
})
const Room = mongoose.model("Room",roomSchema)
const Queries= mongoose.model("Queries",queriesSchema)
const User = mongoose.model("User",userSchema)
module.exports= {User,Queries,Room,}

