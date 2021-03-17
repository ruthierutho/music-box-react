import React from 'react';


const ResetButton = ({resetEverything}) => {

    const handleClick = () => {
        resetEverything()
    }

    return (
        <button className="reset" onClick={handleClick}>Reset</button>
    )
}

export default ResetButton;