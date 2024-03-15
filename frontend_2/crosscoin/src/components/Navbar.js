import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from "../assets/images/image.png"
const Navbar = () => {  
    


    return (
        <div className="nav">
            <link href='https://fonts.googleapis.com/css?family=Major Mono Display' rel='stylesheet'></link>
            <div className="nav-header">
                <div className="nav-title">
                    <img  className='company_logo' src={logo} alt=''/>
                    {/* <Link to="/" className='abba' ><h2>Crosscoin</h2></Link> */}
                </div>
            </div>
            <div className="nav-links">
                <Link to="/login" className='full_signup'>
                    <span className='t_signup' >Login</span>
                </Link>
                <Link to="/register"  style={{marginRight:"77px"}}>
                    <span className='reg_text'>Register</span>
                </Link>
            </div>
        </div>
        
    )
}

export default Navbar