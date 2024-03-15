import React from 'react'
import "./About.css"
import Navbar from '../../components/navbar/Navbar'
function About() {
  return (
    <div>
      <Navbar/>
    <div className='upper_about'>
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
        <h1 className='heading_about'>About Us</h1>
        <div className='abcard_1'>
            <h1 className='wel_about'>Welcome to Cross Coin</h1>
            <span className='text_about'>A cross border transaction platform, here you can transfer your money with less charges , less time and more security. 
                    <br></br><br></br><span>This Website is created by ‘Gavari’ team consist of 6 members:-</span>
               <ul>
                    <li>Varun Gupta(Leader) </li>
                    <li>Ayush Mani </li>
                    <li>Ayush Mani Tripathi</li>
                    <li>Gagan Sharma</li>
                    <li>Ronit Ranjan Tripathy</li>
                    <li>Ishant Verma</li>
                </ul> 
            </span>
        </div>
    </div>
    </div>
  )
}

export default About
