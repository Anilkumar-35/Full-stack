import React, { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import   './sign.css'


const Singin = () => {
    const [firstname,setFirstname]= useState()
    const [lastname,setLastname]= useState()
    const [email,setEmail]= useState()
    const [password,setPassword]= useState()
    const navigate = useNavigate()
    async function sigmadd(){
        try {
            const response = await axios.post("http://localhost:3005/user/signup",{
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password
            })
            setFirstname("")
            setLastname("")
            setEmail("")
            setPassword("")
            localStorage.setItem("token",response.data.token)
            alert("add Your data")
            navigate("/")

            
        } catch (error) {
            console.log(error)
            alert("something Wrong in signadd")
            
        }
    }

  return (
    <div>
        <div className="maincontainer">
            <div className="boxcontainer">
                <center><h1>SignUp</h1></center>
                <p>First Name</p>
                <p><input className='boxxes' type="text" onChange={(e)=>{setFirstname(e.target.value)}} /></p>
                <p>Last Name</p>
                <p><input className='boxxes' type="text"onChange={(e)=>{setLastname(e.target.value)}} /></p>
                <p>Email</p>
                <p><input className='boxxes'  type="email"onChange={(e)=>{setEmail(e.target.value)}} /></p>
                <p>Password</p>
                <p><input className='boxxes' type="password"onChange={(e)=>{setPassword(e.target.value)}} /></p>
                <button onClick={sigmadd} className='buuu'>Signin</button>
                <Link to="/singup" className='buu1'>SignIn </Link>
                <Link to="/" className='buu1'>Home </Link>

                

            </div>
        </div>
      
    </div>
  )
}

export default Singin
