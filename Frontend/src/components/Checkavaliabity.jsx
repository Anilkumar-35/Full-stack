import React, { useEffect, useState } from 'react'
import axios from'axios'
import {useNavigate} from "react-router-dom"

const Checkavaliabity = () => {
  const [fromDate,setFromDate]=useState()
  const [toDate,setToDate]=useState()
  const [guests,setguests]= useState(0)
  const [acRoom,setAcRoom]=useState(false)
  const[nonAcRoom,setNonAcRom]=useState(false)
  const navigate = useNavigate()
    const incnumber =() => {
      setguests(guests+1)
    }
    const decnumb=()=>{
      if(guests>0){
        setguests(guests-1)
      }
      else{
        setguests(0)
      }
    }
    async function BookAcRoom() {
      if(!localStorage.getItem("token")){
        navigate("/signin")
      }else{
        try {
          const response= await axios.post("http://localhost:3005/hotel/bookroom",{
            
            fromDate: fromDate,
            toDate:toDate,
            guests:guests,
            roomType:'ac'
          },{
            headers:{
              authorization: localStorage.getItem("token")
            }
           
          })
          alert("Booked")

          
        } catch (error) {
          console.log(error)
          alert("error while booking")
          
        }
      }
    }
    async function BookNonAcRoom() {
      if(!localStorage.getItem("token")){
        navigate("/singin")
      }else{
        try {
          const response= await axios.post("http://localhost:3005/hotel/bookroom",{
            
            fromDate: fromDate,
            toDate:toDate,
            guests:guests,
            roomType:"NonAc"
          },{headers:{
            authorization: localStorage.getItem("token") 
          }
            
          })
          alert("")
      
          
        } catch (error) {
          console.log(error)
          alert("error while booking")
          
        }
      }
      
      
    }

    const CheckAvailableRoom  = async()=>{
      console.log(acRoom)
      const response = await axios.post("http://localhost:3005/hotel/checkavailibility",{
        fromDate: fromDate,
        toDate:toDate,
        guest:guests
      })
      console.log(response.data.acRoom)
      setAcRoom(response.data.ac);
      setNonAcRom(response.data.nonac)
    }
    useEffect(()=>{
      console.log('acRoom Updated:',acRoom);
    },[acRoom])
  return (
    <div  className='mainaavalitty'>
      <div className='mainaavality'>

     
      <div className="box1"><h2> Check In </h2>
      <input type="date" onChange={(e)=>{setFromDate(e.target.value)}} /></div>
      <div className="box2"><h2>Checkout</h2>
      <input type="date" onChange={(e)=>{setToDate(e.target.value)}} /></div>
      <div className="box3">
        <h2>Person</h2>
        <div className='bookingguests'>
     <button onClick={incnumber} className='bookingincreas'>+</button>
      <p>{guests}</p>
      <button onClick={decnumb} className='bookingincreas'>-</button>
     </div>
      </div>
    
     
      </div>
        <center>  <button className='checkbutton' onClick={CheckAvailableRoom}>Check Avalblitiy</button> </center>
        <div className='bookingbox2'>
        {
          acRoom?
          (
            
            <div className='acbookedroom'>
              <div> <img src="public\img\bookedimg.jpeg" className='bookedimg' alt="" /></div>
              <h3>Villa</h3>
              <button onClick={BookAcRoom} className='accbutton'>AC</button>
              
             

            </div>
          )
          :
          null
        }
        {
          nonAcRoom?
          (
            <div className='nonbuttonac'>
              <button onClick={BookNonAcRoom} className='nonaccbutton'>NonAc</button>
            </div>
          )
          :
          null
        }
      </div>


      
    </div>
  )
}

export default Checkavaliabity
