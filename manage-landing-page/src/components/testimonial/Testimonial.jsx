import React from 'react';
import ali from '../../img/avatar-ali.png';
import Richard from '../../img/avatar-richard.png'

export default function Testimonial() {
    const slider = new A11YSlider(document.querySelector(".slider"), {
        slidesToShow: 1,
        arrows: true, // arrows enabled 767px and down
        dots: false,
        responsive: {
          768: {
            slidesToShow: 2,
            arrows: false
          },
          960: {
            disable: true // slider disabled 960px to 1279px
          },
          1280: {
            disable: false,
            slidesToShow: 4,
            dots: true // dots enabled 1280px and up
          }
        }
      });
    return (
        <div className="testimonial">
            <h1 className="header mb-[122px]">What they’ve said</h1>
            <div className="users container flex flex-col items-center  slider  ">
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
            <ul class="slider">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
</ul>
        </div>
    )
}
