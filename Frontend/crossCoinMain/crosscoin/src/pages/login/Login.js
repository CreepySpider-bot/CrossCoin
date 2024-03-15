import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
function Login() {
  return (
    <div>
      <Navbar/>
      <div className='login'>
            <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
            <div className="left_container_1">
                <div className='Register_1'>
                    <h2 className='heading_1'>Login to your account</h2>
                    <label className='elabel_1'>Email</label>
                    <input placeholder='example@gmail.com' type='email' className='email_1'/>
                    <label className='plabel'>Password</label>
                    <input type='password' placeholder='Enter your password' className='password_1'/>
                    <Link to="/home"><button className='sbtn_1'>Login</button></Link>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
