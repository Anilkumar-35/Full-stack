import axios from 'axios'
import React, { useState } from 'react'
import Nav from '../components/nav'
import Footer from '../components/Footer'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
const Contact = () => {
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[phone,setPhone]=useState()
    const[querriesRelatedTo,setQuerriesRelatedTo]= useState()
    async function SubmitcQuerry(){
        try {
            const response =await axios.post("http://localhost:3005/hotel/contact",{
                name:name,
                email:email,
                phone:phone,
                querriesRelatedTo:querriesRelatedTo
            })
            alert("added your Querry")
            location.reload()

            
        } catch (error) {
            console.log(error)
            alert("Something Wrong in Qerry Routing")

            
        }
    }
  return (
    <div>
    <Nav/>
      <div className="maincontact">
        <div className="contactbox">
              <center><h2>From</h2></center>
            <div>
              <center>  <h3>Name</h3></center>
                <input className='textcontact' onChange={(e)=>{setName(e.target.value)}} type="text" />
            </div>
            <div>
                <center><h3>Email</h3></center>
                <input className='textcontact' onChange={(e)=>{setEmail(e.target.value)}} type="text" />
            </div> 
            <div>
               <center> <h3>Phone</h3></center>
                <input className='textcontact' onChange={(e)=>{setPhone(e.target.value)}} type="number" />
            </div>
            <div>
               <center> <h3>Querrytype</h3></center>
                <select className='textcontact1' onChange={(e)=>{setQuerriesRelatedTo(e.target.value)}} >
                <option  value="">Select a Type</option>
                <option  value="">Resvervation</option>
                <option value="">Booking</option>
                <option value="">Otheres</option>
                </select>
            </div>
            <button className='contactbutton' onClick={SubmitcQuerry}>Submit</button>

        </div>
      </div>
      <div className="contactlinks">
         <div className="boxescontact1"> <h1>Phone </h1><p>+1 939 3839 399<br/>
         +1 492 5991 203</p></div>
         <div className="boxescontact2"><h1>Address</h1>
         <p>43 Raymouth Rd. Baltemoer, London</p></div>
         <div className="boxescontact3"><h1>Email</h1><p>info@mydomain.com</p></div>
         <div className="boxescontact4"><h1>Follow</h1><p className='iconssize '><FaInstagram /><FaFacebook /> <FaTwitter /><FaLinkedin /><FaSkype /></p>
         </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact
