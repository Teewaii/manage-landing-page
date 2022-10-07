import React from 'react';
import hero from '../../img/illustration-intro.svg'

export default function Hero() {
    return (
        <div className='hero
        '>
            <div className="bucket flex flex-col items-center pt-[47px] 
        lg:py-[20px] lg:flex-row-reverse lg:justify-center lg:container ">

                <div className="hero-img flex flex-1 items-center
                justify-center lg:flex lg:items-center lg:justify-end        
            ">
                    <img src={hero} alt="" />
                </div>


                <div className="left flex-1  
            lg:flex lg:flex-col  lg:text-left
            lg:justify-center
            ">
                    <div className="desc container lg:px-0
            
            ">
                        <h1 className='header lg:text-4xl xl:text-5xl lg:max-w-[500px] lg:leading-[2.5rem] xl:leading-[3.5rem]'>Bring everyone together to build better products.</h1>
                        <p className='body pt-[16px]  lg:max-w-[520px] mt-[40px] lg:mt-[0]'>Manage makes it simple for software teams to plan day-to-day
                            tasks while keeping the larger team goals in view.</p>
                    </div>

                    <div className="buton ">
                        <button className='btn mt-[35px] hover:opacity-80  '>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
