import React from 'react';
import ali from '../../img/avatar-ali.png'

export default function Testimonial() {
    return (
        <div className="testimonial">
            <h1 className="header mb-[122px]">What they’ve said</h1>
            <div className="users">
                <div className="userCard  bg-VeryLightGray flex flex-col items-center">
                    <div className="headshot mt-[-60px] mb-[28px]">
                        <img src={ali} alt="" />
                    </div>
                    <h2>Ali Bravo</h2>
                    <p className="body container">“We have been able to cancel so many other subscriptions since using
                        Manage. There is no more cross-channel confusion and everyone is much
                        more focused.”
                    </p>
                </div>
            </div>
        </div>
    )
}
