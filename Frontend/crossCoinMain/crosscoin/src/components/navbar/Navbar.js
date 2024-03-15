import React from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo_2.svg'
import login from "../../assets/images/login.jpg"
import signup from "../../assets/images/signup.png"
import about from "../../assets/images/aboutus.png"
import sub from "../../assets/images/subscribe.png"
import { Link } from 'react-router-dom'
const Navbar = () => {  
    
    function onLinkClick(e) {
        e.preventDefault();
        // further processing happens here
     }

    return (
        <div className="nav">
            <div className="nav-header">
                <div className="nav-title">
                    <img className="logo" src={logo} alt="" />
                    <Link to="/" className='abba' ><h2 className='comp_name'>CrossCoin</h2></Link>
                </div>
            </div>
            <div className="nav-links">
                <Link to='/login' className='full_login'>
                    <img className='login_icon' src={login} alt=''/>
                    <span className='nav_login'>Login</span>
                </Link>
                <Link to="/register" className='full_signup'>
                    <img className='signup_icon' src={signup} alt=''/>
                    <span className='t_signup' >SignUp</span>
                </Link>
                <Link to="https://buy.stripe.com/test_8wM15NaEXapU4z6cMP" >
                    <img className='about_icon' src={sub} alt=''/>
                    <span>Subscribe</span>
                </Link>
                <Link to="/about"  style={{marginRight:"77px"}}>
                    <img className='about_icon' src={about} alt=''/>
                    <span>About Us</span>
                </Link>
                
            </div>
        </div>
        
    )
}

export default Navbar