import React from 'react'
import "./Sidebar.css"
import logontext from "../../assets/images/logontext.jpg"
import send from "../../assets/images/send.png"
import { Link } from 'react-router-dom';
function Sidebar() {
  function handleqr(){
    window.open("/qr","qr","width=400px,height=400px");
  }
  return (
    <div>
    <link href='https://fonts.googleapis.com/css?family=Major Mono Display' rel='stylesheet'></link>
      <nav>
    <ul className='side_ul'>
        <img className='logontext' src={logontext} alt=''/>
        <div className='circle'><img className='profile_icon' src='https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png' alt=''/></div>
        <hr></hr>
      <li><img src={send} alt=''/><Link to="/main"><span className='sidebar_li_span'>transfer</span></Link></li>
      <li><img src={send} alt=''/><Link to="/receive"><span className='sidebar_li_span'>receive</span></Link></li>
      <li><img src={send} alt=''/><Link to="/transactions"><span className='sidebar_li_span'>Transaction History</span></Link></li>
      <li><img src={send} alt=''/><Link to="https://buy.stripe.com/test_8wM15NaEXapU4z6cMP"><span className='sidebar_li_span'>subscription</span></Link></li>
      <li><img src={send} alt=''/><Link onClick={handleqr} ><span className='sidebar_li_span'>qr code</span></Link></li>
    </ul>
  </nav>
  <div class="box">
    <h1>Hello World</h1>
  </div>
    </div>
  )
}

export default Sidebar
