import React from 'react'
import "./Landing_cont.css"
function Landing_cont() {
  return (
    <div className='cont_land'>
        <div className='text'>
            <span className='badi_span'>problems with a conventional cross border transaction system</span>
            <ul className='choti_span'>
                <li>takes forever to complete the trasaction</li>
                <li>transaction fees are touching skies</li>
                <li>accessibility is very low</li>
                <li>lack of transparency</li>
                <li>security Risks are high</li>
            </ul>
        </div>
        <div className=''>
            <div className="left_container">
            <div className="text">crosscoin will</div>
            <div className="rotating-text-wrapper">
                <h2 style={{"font-weight": "900"}}>charge you less</h2>
                <h2 style={{"font-weight": "900"}}>send faster</h2>
                <h2 style={{"font-weight": "900"}}>be more secure</h2>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Landing_cont
