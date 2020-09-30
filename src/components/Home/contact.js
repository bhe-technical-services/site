import { Link } from 'gatsby'
import React from 'react'

// import PrimaryLink from '../buttons/PrimaryButton'
import {Phone, ShoppingBag} from 'react-feather'

function contact() {
    return (
        <section className='relative p-10 bg-flat-gray'>
            <svg className="absolute inset-y-0 top-0 inline-block w-full h-full text-off-white " fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon points="0,65 100,0 0,0" />
            </svg>
            <div className="z-10 flex flex-col px-10 py-8 space-y-12 md:space-x-10 md:space-y-0 md:flex-row bg-secondary-brown-500">
                <div>
                    <h3 className='mb-2 '>
                        <Link to ='/contact'>
                            <button className='text-xl font-bold underline transition duration-150 ease-in-out transform focus:outline-none text-primary-green-700 hover:-translate-y-1'>
                                <Phone className='inline mr-3'/>
                                Sales
                            </button>
                        </Link>
                    </h3>
                    <p className="mt-3 text-sm font-medium text-writing-black md:w-56">Contact sales, for assistance with ABCD</p>
                </div>
                <div>
                    <h3 className='mb-2 '>
                        <Link to ='/products'>
                            <button className='text-xl font-bold underline transition duration-150 ease-in-out transform focus:outline-none text-primary-green-700 hover:-translate-y-1'>
                                <ShoppingBag className='inline mr-3'/>
                                Browse Products
                            </button>
                        </Link>
                    </h3>
                    <p className="mt-3 text-sm font-medium text-writing-black md:w-56">View our products & services, see how we can ABCFD</p>
                </div>
                {/* <div className=''>
                    <h3 className='mb-2 text-xl font-bold underline transform text-primary-green-700 hover:-translate-y-2'><ShoppingBag className='inline mr-3'/>Quality Products</h3>
                    <p>View our products & services, see how we can ABCFD</p>
                </div> */}
            </div>
        </section>
    )
}

export default contact

