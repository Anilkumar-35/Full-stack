import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Nav from '../components/nav'
import Checkavaliabity from '../components/Checkavaliabity'
import Footer from '../components/Footer'

const Home = () => {
    const navigate = useNavigate()
    
    
    
  return (
    <div>
      <Nav/>
        <Hero/>

        <div className="caurselmain">
          <div className="caursel"> </div>
           </div>
           <div className="gallery123">
            <div className="abc">
              <div className="roomtypebox12"> <h1 className='ourrooms'>Welcome! </h1><p>Discover a hotel that defines  a new<br/> dimension of luxury.</p></div>
              <div ><img src="public\img\gallery22.avif" alt="" className="roomtypebox123" /></div>
              
            </div>
            <div className="photosofroomss">
              <center><h1>Rooms & Suites</h1>
                <h3>Luctus ullamcorper mattis, pulvinar <br/>dapibus.</h3></center>
             <div className="flexrooms">
             <div className="roomscard1"><img src="public\img\room1.jpeg" className='roomssimg1' alt="" />
             <h1>Single Room</h1>
            <h3>Ullamcorper mattis, pulvinar in the dapibus.</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis unde<br/> accusantium sapiente ipsa cumque sequi, ratione ipsam architecto<br/> perspiciatis velit.</p>
              </div>
              <div className="roomscard2"><img src="public\img\room2.jpg"  className='roomssimg1' alt="" />
              <h1>Family Room</h1>
              <h3>Ullamcorper mattis, pulvinar in the dapibus.</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis unde<br/> accusantium sapiente ipsa cumque sequi, ratione ipsam architecto<br/> perspiciatis velit.</p>

              </div>
             </div>
            </div>


           </div>
        

        
      <Footer/>
    </div>
  )
}

export default Home
