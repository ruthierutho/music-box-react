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
                id: 0,
                name: "Oboe"
            },
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
            },
            {
                id: 8,
                name: "Accordian"
            }


        ]
    );
    const [selectedInstrument, setSelectedInstrument] = useState(null);
    const [questions, setQuestions] = useState(
        [
            {id:0, question:"Find the piano!", answer:"piano"},
            {id:1, question:"Click the flute!", answer:"flute"},
            {id:2, question:"Can you find the cello?", answer:"cello"}
        ])
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const instrumentClick = (instrumentKey) => {
        const instrument = instruments[instrumentKey];
        setSelectedInstrument(instrument);
    }

    const pressPlay = () => {
        const randomQ = questions[Math.floor(Math.random() * questions.length)];
        setSelectedQuestion(randomQ);
    }




    return (
        <div className="music-box">
            <div className="side-bar">
                <Title ></Title>
                <GameButton pressPlay={pressPlay}></GameButton>
                <GameWords selectedQuestion={selectedQuestion}></GameWords>
            </div>
            <InstrumentList instrumentClick={instrumentClick} instruments={instruments}></InstrumentList>

        </div>
    )
}

export default MusicBox;