import React from 'react';
import { useState } from 'react';
import useSound from 'use-sound';


const InstrumentItem = (props) => {

    const [play] = useSound(props.sound)

    const handleClick = (event) => {
        props.instrumentClick(props.instKey)
        play(props.sound)
        console.log(props.sound)
    }

    
    


    return (
        <>
        <li onClick={handleClick} className="instrument">
            <img className="instrument-image" src={props.image} alt="icon of instrument" width="90px"/>
            <h3 className="instrument-word">{props.name}</h3>  
        </li>
        </>
    )
}

export default InstrumentItem;