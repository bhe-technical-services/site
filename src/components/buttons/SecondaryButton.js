import React from 'react'
import {Link} from 'gatsby'
import PropTypes from "prop-types";


const SecondaryButton = ({path, text}) => {
    return (
<div className="mt-3 sm:mt-0 sm:ml-3">
                        <Link to={path} className="secondaryButtonStyles">
                            {text}
                        </Link>
                        </div>    
                        )}

SecondaryButton.propTypes = {
        path: PropTypes.string,
        text: PropTypes.string,
      };

export default SecondaryButton


