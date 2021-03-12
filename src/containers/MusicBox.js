import React from 'react';
import { useState } from 'react';
import Title from '../components/Title';
import InstrumentList from '../components/InstrumentList';
import GameButton from '../components/GameButton';
import GameWords from '../components/GameWords';
import '../static/MusicBox.css'
import harp from '../static/harp.png';
import accordion from '../static/accordion.png';
import cello from '../static/cello.png';
import clarinet from '../static/clarinet.png';
import guitar from '../static/guitar.png';
import piano from '../static/piano.png';
import saxophone from '../static/saxophone.png';
import drum from '../static/snare_drum.png';
import trumpet from '../static/trumpet.png';


function MusicBox() {

    const [instruments, setInstruments] = useState(
        [
            {
                id : 0,
                name: "Harp",
                image : harp
            },
            {
                id: 1,
                name: "Saxophone",
                image : saxophone
            },
            {
                id: 2,
                name: "Piano",
                image : piano
            },
            {
                id: 3,
                name: "Drum",
                image : drum
            },
            {
                id: 4,
                name: "Clarinet",
                image : clarinet
            },
            {
                id: 5,
                name: "Cello",
                image : cello
            },
            {
                id: 6,
                name: "Trumpet",
                image : trumpet
            },
            {
                id: 7,
                name: "Guitar",
                image : guitar
            },
            {
                id: 8,
                name: "Accordion",
                image : accordion
            }


        ]
    );
    const [selectedInstrument, setSelectedInstrument] = useState(null);
    const [questions, setQuestions] = useState(
        [
            {id:0, question:"Find the piano!", answer:"Piano"},
            {id:1, question:"Click the clarinet!", answer:"Clarinet"},
            {id:2, question:"Can you find the cello?", answer:"Cello"},
            {id:3, question:"Where is the trumpet?", answer:"Trumpet"},
            {id:4, question:"Find the harp!", answer:"Harp"},
            {id:5, question:"Can you spot the accordion?", answer:"Accordion"},
            {id:6, question:"Where is the Saxophone?", answer:"Saxophone"}

        ])
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const instrumentClick = (instrumentKey) => {
        const instrument = instruments[instrumentKey];
        setSelectedInstrument(instrument);
    }

    const pressPlay = () => {
        setSelectedInstrument(null);
        const randomQ = questions[Math.floor(Math.random() * questions.length)];
        setSelectedQuestion(randomQ);
    }




    return (
        <div className="music-box">
            <div className="side-bar">
                <Title ></Title>
                <GameButton selectedQuestion={selectedQuestion} selectedInstrument={selectedInstrument} pressPlay={pressPlay}></GameButton>
                <GameWords selectedQuestion={selectedQuestion} selectedInstrument={selectedInstrument}></GameWords>
            </div>
            <InstrumentList instrumentClick={instrumentClick} instruments={instruments}></InstrumentList>

        </div>
    )
}

export default MusicBox;