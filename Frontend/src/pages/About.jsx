import React from 'react'
import Nav from '../components/nav'
import vedio from '../../public/img/roomtour.mp4'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
       
        <div className="mainabout">
        <Nav/>
        <div className='aboutus'><h1 className='aboutt' >About Us</h1>
        <a className='hrfhome' href="/">Home</a></div>
        
        <div className="first-container">
            <div className="aboutfirstbox">
                <h1 className='welcomeabout'>Welcome To Villa  </h1>
               <p> Built in 1910 during the Belle Epoque period, this hotel is located in the center of Paris, with easy access to the city’s tourist attractions.<br/> It offers tastefully decorated rooms. Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/> Mollitia quis, corporis impedit nulla eum repellendus natus. Aliquam cumque debitis sequi nam minima rem error, eaque illum architecto sit est fugiat.</p>
               <button>Learn more</button>
            </div>
            <div className="aboutsecondbox">
                <img className='aboutimg1' src="public\img\about1.jpg" alt="" />
                <img className='aboutimg2' src="public/img/about2.jpeg" alt="" />
                <img className='aboutimg3' src="public/img/about3.jpeg" alt="" />
                <img className='aboutimg4' src="public/img/about4.jpeg" alt="" />
            </div>
        </div>
        <div className="scond-container">
            <div><h1 className='serivices'>S</h1>
            <h1 className='serivices'>E</h1>
            <h1 className='serivices'>R</h1>
            <h1 className='serivices'>V</h1>
            <h1 className='serivices'>I</h1>
            <h1 className='serivices'>C</h1>
            <h1 className='serivices'>E</h1></div>
            <div className='backscond'><h3>Travel & Camping</h3></div>
            <div className='backevent'><h3> Events and Party</h3></div>            
            <div className='backres'><h3>Resturent Services </h3></div>

        </div>
        <div className="third-container">
                  <center><h1 className='tourvedio'>Our Facilities</h1> </center> 
            <div className="vediocontainer">
               <video autoPlay loop muted  src={vedio} className='vediovi' ></video>
             <h1 className='startbutton' ><a href="https://youtu.be/FDdtZfCui40?si=SJhmYsKAKI43xdlu" className='hrfstart'>Learn more</a></h1> 

            </div>
        </div>
        <div className="fourth-container">

        </div>
        </div>

          <Footer/>
    </div>
  )
}

export default About
