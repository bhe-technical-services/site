import React from 'react'
import VestDude from '../../images/vest-dude.png'
import HelmetDude from '../../images/helmet-dude.png'
import { Link } from 'gatsby'

function why() {
    return (
        <section id='why' className='text-writing-black'>
            <h1 className='mb-5 text-center md:mb-10 main-heading'>Why buy from us?</h1>

            <div className='flex flex-col p-10 space-y-24'>
                <div className="relative items-center bg-gray-100 shadow-xl md:flex min-h-19rem" >
                    <div className="relative w-full overflow-hidden md:w-2/5 min-h-19rem" >
                        <img className="absolute inset-0 object-cover object-center w-full h-full" src={VestDude} alt=""/>
                    </div>
                    <div className="flex items-center w-full h-full bg-gray-100 md:w-3/5">
                        <div className="p-12 md:pr-24 md:pl-16 md:py-12">
                            <h2 className='sub-heading'>Experience</h2>
                            <p className="text-gray-600">BHE Technical Services (PVT) LTD was incorporated in 1997, and started trading in Zimbabwe in 2002.</p>
                            <Link to='/about' className="flex items-baseline mt-3 text-primary-green-600 hover:text-primary-green-900 focus:text-primary-green-900" href="">
                                <span>Learn more about our work</span>
                                <span className="ml-1 text-xs">&#x279c;</span>
                            </Link>
                        </div>
                        <svg className="absolute inset-y-0 hidden w-24 h-full -ml-12 text-gray-100 fill-current md:block" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>
                    </div>
                </div>
                <div className="relative items-center bg-gray-100 shadow-xl md:flex md:flex-row-reverse min-h-19rem" >
                    <div className="relative w-full overflow-hidden md:w-2/5 min-h-19rem" >
                        <img className="absolute inset-0 object-cover object-center w-full h-full" src={HelmetDude} alt=""/>
                    </div>
                    <div className="flex flex-row-reverse items-center w-full h-full bg-gray-100 md:w-3/5">
                        <div className="p-12 md:pr-24 md:pl-16 md:py-12">
                            <h2 className='sub-heading'>Scalable Team</h2>
                            <p className="text-gray-600">Contract workers on standby, to flexibly cater for your needs.</p>
                            <Link to='/about' className="flex items-baseline mt-3 text-primary-green-600 hover:text-primary-green-900 focus:text-primary-green-900" href="">
                                <span>Learn more about our work</span>
                                <span className="ml-1 text-xs">&#x279c;</span>
                            </Link>
                        </div>
                        <svg className="absolute inset-y-0 hidden w-24 h-full -mr-12 text-gray-100 fill-current md:block" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default why

