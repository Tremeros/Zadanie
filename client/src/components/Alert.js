import React from 'react';
import PropTypes from 'prop-types';



export const Alert = ({error}) => {
    return (
        <div>
            {error && error.map((error, index) => {
                return <div key={index} className="ui negative message">
                <p>{error.msg}</p>
             </div>
            })}
        </div>
    )
}

Alert.propType = {
    error: PropTypes.array.isRequired
}