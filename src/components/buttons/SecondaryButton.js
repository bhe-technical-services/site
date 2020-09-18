import React from 'react'
import {Link} from 'gatsby'
import PropTypes from "prop-types";


const SecondaryButton = ({path, text}) => {
    return (
<div className="mt-3 sm:mt-0 sm:ml-3">
                        <Link to={path} className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-indigo-700 transition duration-150 ease-in-out bg-indigo-100 border border-transparent rounded-md hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 md:py-4 md:text-lg md:px-10">
                            {text}
                        </Link>
                        </div>    
                        )}

SecondaryButton.propTypes = {
        path: PropTypes.string,
        text: PropTypes.string,
      };

export default SecondaryButton


