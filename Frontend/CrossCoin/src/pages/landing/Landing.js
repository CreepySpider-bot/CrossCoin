import React from 'react'
import './Landing.css'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='LandingPage'>
      <div className="left_container">
        <div className="text">Do you your Transaction with
          <div className="rotating-text-wrapper">
            <h2>Less Time</h2>
            <h2>Less Fees</h2>
            <h2>More Security</h2>
          </div>
        </div>
      </div>
      <div className="right_container">
        <Link to="/register"><button className='getStarted'>Get Started</button></Link>
      </div>
    </div>
  )
}

export default Landing