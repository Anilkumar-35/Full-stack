import React from 'react'
import './nav.css'
import { Link, useNavigate } from 'react-router-dom'


const Nav = () => {
  const navigate = useNavigate()
  function logout(){
    localStorage.removeItem("token")
    navigate("/singup")
  }
  return (
    <navbar className='navbar' >
           <div className='header'>
                 <h1>Villa</h1>
      
           </div>
            <div className='links'>
                <ul>
                    <Link to="/" className='link'><li>Home</li></Link>
                    <Link to="/About" className='link'><li>About</li></Link>
                    <Link to="/Contact" className='link'><li>Contact</li></Link>      
                    {
                      localStorage.getItem("token")? 
                      <li onClick={logout} className='link'>Logout</li>
                      :
                      <Link to="/singup" className='link'><li>SignIn</li></Link>         
                    }  
                    {
                      !localStorage.getItem("token")? 
                      <Link to="/singin" className='link'><li>SignUp</li></Link> 
                      :
                      null        
                    }   
               </ul>
           </div>
             
      
    </navbar>
  )
}

export default Nav
