import React from 'react';
import InstrumentItem from './InstrumentItem';

const InstrumentList = ({instruments}) => {

    const instrumentsMapped = instruments.map(instrument => {
        return (
            <InstrumentItem name={instrument.name} key={instrument.id}></InstrumentItem>
        )
    })

    return (
        <ul>
            {instrumentsMapped}
        </ul>
    )
}

export default InstrumentList;