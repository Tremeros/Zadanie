import React from 'react';



export const Alert = ({error}) => {
    return (
        <div>
            {error.map((error, index) => {
                return <div key={index} className="ui negative message">
                <p>{error.msg}</p>
             </div>
            })}
        </div>
    )
}