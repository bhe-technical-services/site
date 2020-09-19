import React from 'react'
import {Link} from 'gatsby'
import PropTypes from "prop-types";


const SecondaryButton = ({path, text}) => {
    return (
<div className="mt-3 sm:mt-0 sm:ml-3">
                        <Link to={path} className="flex items-center justify-center w-full px-6 py-2 text-lg font-medium leading-6 transition duration-150 ease-in-out border border-transparent text-primary-green-700 bg-primary-green-300 hover:text-primary-green-700 hover:bg-primary-green-200 focus:outline-none focus:shadow-outline-gray focus:border-primary-green-300 md:py-3 md:text-lg md:px-8">
                            {text}
                        </Link>
                        </div>    
                        )}

SecondaryButton.propTypes = {
        path: PropTypes.string,
        text: PropTypes.string,
      };

export default SecondaryButton


