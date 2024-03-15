import React from 'react'
import "./Qr.css"
import qr from "../../assets/images/qr2.jpeg"
function Qr() {
  return (
    <div className='total'>
        <img className='imgqr' src={qr} alt='' />
    </div>
  )
}

export default Qr
