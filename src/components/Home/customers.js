import React from 'react'
import {Map, Coffee, Archive, Sunrise, Home} from 'react-feather'

const theOans = [
    {name: 'Mining', icon: <Map className='flex-shrink-0 w-6 h-6 mr-4 text-primary-green-600' strokeWidth="3"/>},
    {name: 'Cement', icon: <Home className='flex-shrink-0 w-6 h-6 mr-4 text-primary-green-600' strokeWidth="3"/>},
    {name: 'Agriculture', icon: <Sunrise className='flex-shrink-0 w-6 h-6 mr-4 text-primary-green-600' strokeWidth="3"/>},
    {name: 'Industrial', icon: <Archive className='flex-shrink-0 w-6 h-6 mr-4 text-primary-green-600' strokeWidth="3"/>},
    {name: 'Beverage', icon: <Coffee className='flex-shrink-0 w-6 h-6 mr-4 text-primary-green-600' strokeWidth="3"/>},
]

function customers() {
    return (
    <section className="bg-flat-gray text-off-white body-font">
    <div className="container px-5 py-24 mx-auto">
        <div className="mb-20 text-center">
        <h2 className='mb-5 text-center md:mb-10 main-heading text-off-white'>Major Customers</h2>
        <p className="mx-auto text-base leading-relaxed xl:w-2/4 lg:w-3/4">With our diversity of products and services, BHE has proven capacity to supply multiple industries, such as</p>
        </div>
        <div className="flex flex-wrap -mx-2 lg:w-4/5 sm:mx-auto sm:mb-2">
            {theOans.map(({name, icon}) => (
                <div key={name} className="w-full p-2 sm:w-1/2">
                <div className="flex items-center h-full p-4 rounded bg-writing-black">
                    {icon}
                <span className="font-medium text-white title-font">{name}</span>
                </div>
            </div>
            ))}
        </div>
    </div>
    </section>
    )
}

export default customers

