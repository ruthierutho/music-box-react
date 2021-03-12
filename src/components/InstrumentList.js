import React from 'react';
import InstrumentItem from './InstrumentItem';

const InstrumentList = ({ instruments, instrumentClick }) => {

   

    const instrumentsMapped = instruments.map((instrument, index) => {


        return (
            <InstrumentItem 
            instrumentClick={instrumentClick} 
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