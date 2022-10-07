import React from 'react'

export default function About() {
    return (
        <div className=' '>
            <div className="bucket pt-[100px] pb-[60px] container
            lg:flex lg:justify-between
            ">
                <div className="left flex-1 lg:flex lg:flex-col lg:text-left mb-[55px] ">
                    <h1 className="header mb-[25px] lg:mb-0 lg:text-4xl xl:text-5xl lg:max-w-[500px] lg:leading-[2.5rem] xl:leading-[3.5rem]">What’s different about Manage?</h1>
                    <p className="body pt-[16px]  lg:max-w-[520px] mt-[40px] lg:mt-[0]">Manage provides all the functionality your team needs, without
                        the complexity. Our software is tailor-made for modern digital
                        product teams.
                    </p>
                </div>
                <div className="right flex-1  ">
                    <div className="list">
                        <div className="track mb-[55px] lg:mb-[44px]">
                            <div className="title h-[59px] text-left bg-VeryPaleRed flex items-center
                             mb-[20px] gap-[15px]
                            rounded-l-full lg:bg-[white] lg:gap-[27px] ">
                                <div className="num ">
                                    <span className='btn font-bold py-[18px] '>01</span>
                                </div>
                                <h2 className='lg:text-[1.5rem] '>Track company-wide progress</h2>
                            </div>

                            <p className='body text-left lg:pl-[128px]'> See how your day-to-day tasks fit into the wider vision. Go from
                                tracking progress at the milestone level all the way done to the
                                smallest of details. Never lose sight of the bigger picture again.</p>
                        </div>

                        <div className="advance mb-[55px] lg:mb-[44px]">
                            <div className="title h-[59px] text-left bg-VeryPaleRed flex items-center
                             mb-[20px] gap-[15px]
                            rounded-l-full lg:bg-[white] lg:gap-[27px] ">
                                <div className="num ">
                                    <span className='btn font-bold py-[18px] '>02</span>
                                </div>
                                <h2 className='lg:text-[1.5rem] '>Advanced built-in reports</h2>
                            </div>

                            <p className='body text-left lg:pl-[128px]'>Set internal delivery estimates and track progress toward company
                                goals. Our customisable dashboard helps you build out the reports
                                you need to keep key stakeholders informed.</p>
                        </div>


                        <div className="everything mb-[75px] ">
                            <div className="title h-[59px] text-left bg-VeryPaleRed flex items-center
                             mb-[20px] gap-[15px] 
                            rounded-l-full lg:bg-[white] lg:gap-[27px] ">
                                <div className="num ">
                                    <span className='btn font-bold py-[18px] '>03</span>
                                </div>
                                <h2 className='lg:text-[1.5rem] '>Everything you need in one place</h2>
                            </div>

                            <p className='body text-left lg:pl-[128px]'>Stop jumping from one service to another to communicate, store files,
                                track tasks and share documents. Manage offers an all-in-one team
                                productivity solution.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
