import React from 'react'
import './Landing.css'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <div>
    <Navbar/>
    <div className='LandingPage'>
      <div className="left_container">
        <div className="text">Do your Transaction with
          <div className="rotating-text-wrapper">
            <h2>Less Time</h2>
            <h2>Less Fees</h2>
            <h2>More Security</h2>
          </div>
        </div>
      </div>
      <div className="right_container">
        
        <Link to="/register"><button className='getStarted'>Get Started</button></Link>
        {/* <Link to="/register"></Link> */}

      </div>
    </div>
    </div>
  )
}

export default Landing