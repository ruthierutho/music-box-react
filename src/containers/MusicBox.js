import React from 'react';
import { useState } from 'react';
import Title from '../components/Title';
import InstrumentList from '../components/InstrumentList';
import GameButton from '../components/GameButton';
import GameWords from '../components/GameWords';
import '../static/MusicBox.css'


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
            },
            {
                id: 4,
                name: "Flute"
            },
            {
                id: 5,
                name: "Cello"
            },
            {
                id: 6,
                name: "Trumpet"
            },
            {
                id: 7,
                name: "Guitar"
            }

        ]
    );
    const [selectedInstrument, setSelectedInstrument] = useState(null);

    const instrumentClick = (instrument) => {
        setSelectedInstrument(instrument);
        console.log(instrument);
    }


    return (
        <div className="music-box">
            <div className="side-bar">
                <Title ></Title>
                <GameButton></GameButton>
                <GameWords></GameWords>
            </div>
            <InstrumentList instrumentClick={instrumentClick} selectedInstrument={selectedInstrument} instruments={instruments}></InstrumentList>

        </div>
    )
}

export default MusicBox;