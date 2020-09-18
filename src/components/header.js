// import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import { Transition } from '@tailwindui/react'

function Header() {
    const [isOpen, setIsOpen] = useState(false)
  // const [isExpanded, toggleExpansion] = useState(false);
  // const { site } = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <>
      <header className="relative px-4 pt-6 sm:px-6 lg:px-8">
                    <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                        <div className="flex items-center justify-between w-full md:w-auto">
                        <a href="#" aria-label="Home">
                            <img className="w-auto h-8 sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="Logo"/>
                        </a>
                        <div className="flex items-center -mr-2 md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500" id="main-menu" aria-label="Main menu" aria-haspopup="true">
                            <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            </button>
                        </div>
                        </div>
                    </div>
                    <div className="hidden md:block md:ml-10 md:pr-4">
                        <a href="#" className="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900">Product</a>
                        <a href="#" className="ml-8 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900">Features</a>
                        <a href="#" className="ml-8 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900">Marketplace</a>
                        <a href="#" className="ml-8 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900">Company</a>
                        <a href="#" className="ml-8 font-medium text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-900">Log in</a>
                    </div>
                    </nav>
                </header>

                    {/* Mobile menu, show/hide based on menu open state.

                    Entering: "duration-150 ease-out"
                    From: "opacity-0 scale-95"
                    To: "opacity-100 scale-100"
                    Leaving: "duration-100 ease-in"
                    From: "opacity-100 scale-100"
                    To: "opacity-0 scale-95" */}

                <Transition
                show={isOpen}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                >
                    <header className="absolute inset-x-0 top-0 z-20 p-2 transition origin-top-right transform md:hidden">
                        <div className="rounded-lg shadow-md">
                        <div className="overflow-hidden bg-white rounded-lg shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
                            <div className="flex items-center justify-between px-5 pt-4">
                            <div>
                                <img className="w-auto h-8" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt=""/>
                            </div>
                            <div className="-mr-2">
                                <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500" aria-label="Close menu">
                                    <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            </div>
                                <div className="px-2 pt-2 pb-3 ">
                                    <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50" role="menuitem">Product</a>
                                    <a href="#" className="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50" role="menuitem">Features</a>
                                    <a href="#" className="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50" role="menuitem">Marketplace</a>
                                    <a href="#" className="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50" role="menuitem">Company</a>
                                </div>
                        </div>
                        </div>
                    </header>
                </Transition>
    </>
  );
}

export default Header;

        // <nav
        //   className={`${
        //     isExpanded ? `block` : `hidden`
        //   } md:block md:items-center w-full md:w-auto`}
        // >
        //   {[
        //     {
        //       route: `/about`,
        //       title: `About`,
        //     },
        //     {
        //       route: `/contact`,
        //       title: `Contact`,
        //     },
        //   ].map((link) => (
        //     <Link
        //       className="block mt-4 text-white no-underline md:inline-block md:mt-0 md:ml-6"
        //       key={link.title}
        //       to={link.route}
        //     >
        //       {link.title}
        //     </Link>
        //   ))}
        // </nav>