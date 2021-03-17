import React from 'react';
import '../static/ModeToggle.css'

const ModeToggle = ({modeChange}) => {

    const handleChange = () => {
        modeChange()
    }

    return (
        <>
        <h2>Hard Mode:</h2>
        <label class="switch">
            <input onChange={handleChange} type="checkbox" />
            <span class="slider round"></span>
        </label>
        </>
    )
}

export default ModeToggle;