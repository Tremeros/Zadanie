import React from 'react';



export const Alert = ({error}) => {
    return (
        <div className="ui message">
           <p>{error.msg}</p>
        </div>
    )
}