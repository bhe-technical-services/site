import React from 'react'
import {Link} from 'gatsby'
import PropTypes from "prop-types";


const PrimaryButton = ({path, text}) => {
return (
    <div className="shadow">
        <Link to={path} className="primaryButtonStyles">
            {text}
        </Link>
    </div>
    )}

PrimaryButton.propTypes = {
        path: PropTypes.string,
        text: PropTypes.string,
      };

export default PrimaryButton


