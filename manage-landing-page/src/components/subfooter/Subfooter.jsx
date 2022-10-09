import React from 'react';

export default function Subfooter() {
    return (
        <div className="subfooter relative bg-BrightRed pt-[80px] pb-[70px] overflow-hidden
        before:absolute before:bg-contain before:bg-no-repeat before:top-[20px] 
        before:left-[-420px] before:right-0 before:h-[500px] before:opacity-[0.15]
         before:bg-hero-pattern before:bottom-0  lg:before:left-[200px] lg:before:top-[-20px] 
         lg:before:h-[600px] lg:py-[62px] 
         
         lg:after:absolute lg:after:bg-hero-pattern lg:after:bg-contain lg:after:bg-no-repeat
         lg:after:top-[-450px] lg:after:right-[0] lg:after:bottom-0 lg:after:w-[600px] 
         after:opacity-[0.15]
         lg:after:left-[110rem]
        ">
            <div className='bucket container lg:flex lg:justify-between lg:items-center'>
                <h1 className='header text-[white] leading-[3rem]
                lg:max-w-[450px] lg:text-left
                '>Simplify how your team works today.
                    Get Started</h1>
                <button className='btnSec mt-[28px] lg:mt-0'>Get Started</button>
            </div>
        </div>
    )
}
