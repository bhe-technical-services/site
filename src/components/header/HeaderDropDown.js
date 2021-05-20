import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Link } from "gatsby";


const HeaderDropDown = () => {
    return (
        <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="px-3 py-1 primaryButtonStyles">
            Products
            <ChevronDownIcon
              className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
        </Menu.Button>
            <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className='absolute right-0 z-30 flex flex-col w-56 mt-2 text-center origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    <Menu.Item >
                    {({ active }) => (
                        <Link to='/products/type/plant-and-equipment' className=''>
                            <a className={`${active ? 'text-primary-green-700 bg-primary-green-200 outline-none ring-gray-400 border-primary-green-300' : 'bg-white'} secondaryButtonStyles transition-none px-3 py-2 h-full`}>Plant & Equipment</a>
                        </Link>
                    )}
                    </Menu.Item>
                    <Menu.Item >
                    {({ active }) => (
                        <Link to='/products/type/industrial-and-mining'>
                            <a className={`${active ? 'text-primary-green-700 bg-primary-green-200 outline-none ring-gray-400 border-primary-green-300' : 'bg-white'} secondaryButtonStyles transition-none px-3 py-2 h-full`} >Industrial & Mining</a>
                        </Link>
                    )}
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>

    )
}

export default HeaderDropDown
