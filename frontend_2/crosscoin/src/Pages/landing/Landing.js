import React from 'react'
import "./Landing.css"
import eth from "../../assets/images/Screenshot__368_-removebg-preview.png"
import mmask from "../../assets/images/Screenshot__370_-removebg-preview (1).png";
import web from "../../assets/images/Web3.png"
import Landing_cont from '../landing_cont/Landing_cont';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
function Landing() {
  return (
    <div>
      <Navbar/>
    <div className='top_cover'>
      <div className='welcome'>
        <span className='small_heading'>welcome to cross coin</span>
        <p className='big_text'>a cross border transaction system which will help you transfer your money with 0.002 usd gas fee</p>
        {/* , in less time, with more security */}
        <Link to="/register"><button className='get_start'>get started</button></Link>
        {/* <button className='get_transfer'>transfer</button> */}
      </div>
      <div className='platform_col'>
        <span className='plat_small_text' >platform we used</span>
        <div className='platform_img'>
          <img className='eth_img' src={eth}></img>
          <img className='meta_img' src={mmask}></img>
          <img className='web_img' src={web}></img>
        </div>
      </div>
    </div>
      <Landing_cont/>
    </div>
  )
}

export default Landing
