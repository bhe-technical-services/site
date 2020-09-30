import React from 'react'
import {Link} from 'gatsby'
import PropTypes from "prop-types";


const PrimaryButton = ({path, text}) => {
return (
    <div className="shadow">
        <Link to={path} className="flex items-center justify-center w-full px-6 py-2 text-lg font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent bg-primary-green-500 hover:bg-primary-green-600 focus:outline-none focus:border-primary-green-700 focus:shadow-outline-indigo md:py-3 md:text-lg md:px-8">
            {text}
        </Link>
    </div>
    )}

PrimaryButton.propTypes = {
        path: PropTypes.string,
        text: PropTypes.string,
      };

export default PrimaryButton


