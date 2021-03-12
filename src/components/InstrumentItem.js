import React from 'react';
import { useState } from 'react';

const InstrumentItem = (props) => {

    const [stateInstrument, setStateInstrument] = useState({});

    const handleClick = (event) => {
        props.instrumentClick(props.instKey)
    }

    return (
        <>
        <li onClick={handleClick} className="instrument">{props.name}</li>
        </>
    )
}

export default InstrumentItem;