import React from 'react';
import InstrumentItem from './InstrumentItem';

const InstrumentList = ({ instruments, instrumentClick }) => {

   

    const instrumentsMapped = instruments.map(instrument => {


        return (
            <InstrumentItem 
            instrumentClick={instrumentClick} 
            name={instrument.name} 
            instKey={instrument.id} 
            key={instrument.id}
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