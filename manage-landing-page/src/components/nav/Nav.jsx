import React from 'react';
import logo from '../../img/logo.svg'

export default function Nav() {
  return (
    <div >
        <nav className=' mt-[40px] lg:mt-[70px]'>
          <div className="mainNav flex justify-between items-center container">
            <div className="logo"><img src={logo} alt="logo" /></div>
               <ul className='flex gap-[33px] font-bold'>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Community</a></li>
            </ul>
            <button className='btn'> Get Started</button>
          </div>
        </nav>
    </div>
  )
}
