import React, { useState } from 'react';
import logo from '../../img/logo.svg';
import hamburger from '../../img/icon-hamburger.svg';
import close from '../../img/icon-close.svg';


export default function Nav({ toggle, toggleMenu }) {
  // const [toggle, setToggle] = useState(false);
  // function toggleMenu() {
  //   setToggle(prev => !prev)
  // }

  return (
    <div className='relative
    ' >
      <nav className=' mt-[30px] lg:mb-[50px] h-[4rem] lg:h-[8rem] flex'>
        <div className="mainNav flex justify-between items-center relative container">
          <div className="logo"><img className='cursor-pointer' src={logo} alt="logo" /></div>
          <ul className={toggle ? 'hidden absolute top-[40px] left-[5%] right-[5%] flex-col font-bold rounded-[5px] h-fit py-[47px] lg:top-0 lg:relative lg:flex lg:flex-row gap-[33px] ' : 'absolute top-[70px] left-[5%] right-[5%] flex-col font-bold rounded-[5px] bg-[white] h-fit py-[47px] lg:top-0 lg:relative lg:flex lg:flex-row gap-[33px]'}>
            <li className='mb-[33px] lg:mb-0'><a href="#">Pricing</a></li>
            <li className='mb-[33px] lg:mb-0'><a href="#">Product</a></li>
            <li className='mb-[33px] lg:mb-0'><a href="#">About Us</a></li>
            <li className='mb-[33px] lg:mb-0'><a href="#">Careers</a></li>
            <li className=' lg:mb-0'><a href="#">Community</a></li>
          </ul>
          <button className='hidden lg:block btn hover:opacity-80 '> Get Started</button>
          <div className="lg:hidden cursor-pointer " onClick={toggleMenu}>
            {toggle ? <img src={hamburger} alt="hamburger" /> :
              <img src={close} alt="" />}
          </div>
        </div>

      </nav>
    </div>
  )
}
