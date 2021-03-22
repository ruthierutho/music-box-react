import React from 'react';
import { useState } from 'react';


const InstrumentItem = (props) => {

    const [stateInstrument, setStateInstrument] = useState({});

    const handleClick = (event) => {
        props.instrumentClick(props.instKey)
    }
    


    return (
        <>
        <li onClick={handleClick} className="instrument">
            <img className="instrument-image" src={props.image} alt="icon of instrument" width="90px"/>
            <h3 className="instrument-word">{props.name}</h3>
            {props.selectedInstrument !== null ?
            <audio src="selectedInstrument.sound"></audio>
            : ""}   
        </li>
        </>
    )
}

export default InstrumentItem;