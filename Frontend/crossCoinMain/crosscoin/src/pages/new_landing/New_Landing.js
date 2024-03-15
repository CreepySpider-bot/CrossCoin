import React from 'react'
import { Link } from 'react-router-dom'
import "./New_landing.css"
function New_Landing() {

  return (
    <div className="nnav">
    <div className="nav-header">
        <div className="nav-title">
            <Link to="/" className='abba' ><h2 className='comp_name'>CrossCoin</h2></Link>
        </div>
    </div>
    <div className="nav-links">
        <Link to='/login' className='full_login'>
            <span className='nav_login'>Login</span>
        </Link>
        <Link to="/register" className='full_signup'>
            <span className='t_signup' >SignUp</span>
        </Link>
        <Link to="/about"  style={{marginRight:"77px"}}>
            <span>About Us</span>
        </Link>
    </div>
</div>
    )
}

export default New_Landing
