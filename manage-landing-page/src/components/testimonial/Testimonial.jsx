import React from 'react';
import ali from '../../img/avatar-ali.png';
import Richard from '../../img/avatar-richard.png'

export default function Testimonial() {
    return (
        <div className="testimonial">
            <h1 className="header mb-[122px]">What they’ve said</h1>
            <div className="users container flex flex-col items-center ">
                <div className="Ali  bg-VeryLightGray flex flex-col items-center
                max-w-[340px] rounded-[5px] pb-[40px] lg:max-w-[535px]
                ">
                    <div className="headshot mt-[-35px] ">
                        <img className='w-[75px]' src={ali} alt="" />
                    </div>
                    <h2 className='my-[30px]'>Ali Bravo</h2>
                    <p className="body container  lg:leading-[1.6rem]">“We have been able to cancel so many other subscriptions since using
                        Manage. There is no more cross-channel confusion and everyone is much
                        more focused.”
                    </p>
                </div>

                {/* <div className="Richard  bg-VeryLightGray flex flex-col items-center
                max-w-[340px] rounded-[5px]
                ">
                    <div className="headshot mt-[-35px] ">
                        <img className='w-[75px]' src={Richard} alt="" />
                    </div>
                    <h2 className='my-[30px]'>Richard Watts</h2>
                    <p className="body container">“We have been able to cancel so many other subscriptions since using
                        Manage. There is no more cross-channel confusion and everyone is much
                        more focused.”
                    </p>
                </div> */}

            </div>
        </div>
    )
}
