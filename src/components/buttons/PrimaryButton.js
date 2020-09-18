import React from 'react'
import {Link} from 'gatsby'
import PropTypes from "prop-types";


const PrimaryButton = ({path, text}) => {
return (
    <div className="rounded-md shadow">
                        <Link to={path} className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo md:py-4 md:text-lg md:px-10">
                            {text}
                        </Link>
                        </div> 
    )}

PrimaryButton.propTypes = {
        path: PropTypes.string,
        text: PropTypes.string,
      };

export default PrimaryButton


