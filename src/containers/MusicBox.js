import React from 'react';
import { useState } from 'react';
import Title from '../components/Title';
import InstrumentList from '../components/InstrumentList';
import GameButton from '../components/GameButton';
import GameWords from '../components/GameWords';


function MusicBox() {

    const [instruments, setInstruments] = useState(
        [
            {
                id: 1,
                name: "Violin"
            },
            {
                id: 2,
                name: "Piano"
            },
            {
                id: 3,
                name: "Drum"
            }
        ]
    )


    return (
        <>
        <h1>MusicBox Container</h1>
        <Title></Title>
        <GameButton></GameButton>
        <GameWords></GameWords>
        <InstrumentList instruments={instruments}></InstrumentList>
        
        </>
    )
}

export default MusicBox;