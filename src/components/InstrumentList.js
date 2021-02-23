import React from 'react';
import { useState } from 'react';
import InstrumentItem from './InstrumentItem';

const InstrumentList = ({instruments, selectedInstrument, instrumentClick}) => {

    const [stateSelectedInstrument, setStateSelectedInstrument] = useState(null);
  
    const handleClick = (event) => {
        let selectedInstrument = instruments[event.target.value];
        setStateSelectedInstrument(selectedInstrument);
        instrumentClick(stateSelectedInstrument);
    }

    const instrumentsMapped = instruments.map(instrument => {
        return (
            <InstrumentItem onClick={handleClick} name={instrument.name} value={instrument.id} key={instrument.id}></InstrumentItem>
        )
    })

    return (
        <ul className="inst-list">
            {instrumentsMapped}
        </ul>
    )
}

export default InstrumentList;