import React from "react";

import DonateNow from './DonateNow';

export default function Heeader() {
  return (
    <div className=" " > 
    <nav className='bg-gray'>
        {/* <a className="navbar-brand" href="/"><img src={process.env.PUBLIC_URL + '/images/Teamlogo.png'} alt="BrandLogo" width="45" /></a> */}
        <ul className="nav justify-content-center ">
          <li className="nav-item bg-warning">
            <a href="/" className="nav-link br hover-bg-white-60 active" >
                HOME
            </a>
          </li>
          <li className="nav-item bg-warning">
            <a href="/cause" className=" nav-link br hover-bg-white-60">
                OUR CAUSE
            </a>
          </li>
          <li className="nav-item bg-warning">
            <a href="/about" className="nav-link br hover-bg-white-60">
                ABOUT US
            </a>
          </li>
          <li className="nav-item bg-warning pointer nav-link hover-bg-white-60">
                <DonateNow/>
            
          </li>
        </ul>
      </nav>

        {/* <Carousel /> */}



      
    </div>
  );
}
