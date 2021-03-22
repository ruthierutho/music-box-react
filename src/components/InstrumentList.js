import React from 'react';
import InstrumentItem from './InstrumentItem';

const InstrumentList = ({ instruments, instrumentClick, selectedInstrument }) => {

   

    const instrumentsMapped = instruments.map((instrument, index) => {


        return (
            <InstrumentItem 
            instrumentClick={instrumentClick} 
            selectedInstrument={selectedInstrument}
            name={instrument.name} 
            instKey={instrument.id} 
            index={index}
            key={instrument.id}
            image={instrument.image}
            >
            </InstrumentItem>
        )
    })

    return (
        <ul className="inst-list">
            {instrumentsMapped}
        </ul>
    )
}

export default InstrumentList;