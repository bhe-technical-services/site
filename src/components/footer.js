import React from 'react'
import {Link} from 'gatsby'
import {Facebook, Twitter, Linkedin} from 'react-feather'
import Logo from '../images/bhe-logo-removebg.png'

function Footer() {
    return (
      <footer className="">
        <nav className="flex items-center justify-between max-w-6xl p-4 mx-auto text-sm ">
          <span className='flex flex-row items-center space-x-4'>
            <Link to="/">
              <img className='inline-block w-8 h-8' src={Logo} alt="BTS logo"/>
            </Link>
            <p className='text-xs font-medium text-center md:text-base'>© {new Date().getFullYear()} BHE Technical Services</p>
          </span>

          <span className='flex flex-row items-center space-x-4'>
            <a className="font-bold no-underline" href="https://github.com/txndai/bts" target="_blank" rel="noopener noreferrer">
              <Facebook className='w-5'/>
            </a>
            <a className="font-bold no-underline" href="https://github.com/txndai/bts" target="_blank" rel="noopener noreferrer">
              <Twitter className='w-5'/>
            </a>
            <a className="font-bold no-underline" href="https://github.com/txndai/bts" target="_blank" rel="noopener noreferrer">
              <Linkedin className='w-5'/>
            </a>
          </span>
        </nav>
      </footer>
    )
}

export default Footer

