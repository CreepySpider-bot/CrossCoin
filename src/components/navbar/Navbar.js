import React from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo.jpeg'

const Navbar = () => {
    return (
        <div className="nav">
            <div className="nav-header">
                <div className="nav-title">
                    <img className="logo" src={logo} alt="" />
                </div>
            </div>
            <div className="nav-links">
                <a href="/" target="_blank">Login</a>
                <a href="/" target="_blank">Sign Up</a>
                <a href="/" target="_blank" style={{marginRight:"77px"}}>About Us</a>
            </div>
        </div>
    )
}

export default Navbar