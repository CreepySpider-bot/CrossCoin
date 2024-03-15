import React from 'react'
import './Register.css'
import glogo from "../../assets/images/Glogo.png"
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
const Register = () => {
    return (
        <div>
            <Navbar/>
        <div className='register'>
            <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
            <div className="left_container">
                <div className='Register'>
                    <h2 className='heading'>Create an account</h2>
                    <label className='elabel'>Email</label>
                    <input placeholder='example@gmail.com' type='email' className='email'/>
                    <label className='plabel'>Password</label>
                    <input type='password' placeholder='Enter your password' className='password'/>
                    <button className='sbtn'>SignUp</button>
                    <button className='gbtn'><img className='glogo' src={glogo} alt=''/>Continue with google</button>
                    <h4 className="already">Already have an account?<Link to="/login" className='loginL'>Log in</Link></h4>
                </div>
            </div>
            <div className="right_container">
            </div>
        </div>
        </div>
    )
}

export default Register