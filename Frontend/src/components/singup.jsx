import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Singup = () => {
    const [email,setEmail]= useState()
    const [password,setPassword]= useState()
    const navigate = useNavigate()
    async function sigmadd(){
        try {
            const response = await axios.post("http://localhost:3005/user/signin",{
                email: email,
                password: password
            })
            localStorage.setItem("token",response.data.token)
            navigate("/")
       

            
        } catch (error) {
            console.log(error)
            alert("something Wrong in signIn")
            
        }
    }
  return (
    <div>
        <div className="maincontainer">
            <div className="boxcontainer">
                <center><h1>SignIn</h1></center>
                <p>Email</p>
                <p><input className='boxxes' type="email"onChange={(e)=>{setEmail(e.target.value)}} /></p>
                <p>Password</p>
                <p><input className='boxxes' type="password"onChange={(e)=>{setPassword(e.target.value)}} /></p>
                <button  onClick={sigmadd} className='buuu'>Signin</button>
                <Link to="/singin" className='buu1'>SignUP </Link>
                <Link to="/" className='buu1'>Home </Link>
            </div>
        </div>
      
    </div>
  )
}

export default Singup
