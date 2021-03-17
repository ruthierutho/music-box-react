import React from 'react';
import { useState } from 'react';
import Title from '../components/Title';
import InstrumentList from '../components/InstrumentList';
import GameButton from '../components/GameButton';
import GameWords from '../components/GameWords';
import ResetButton from '../components/ResetButton';
import ModeToggle from '../components/ModeToggle';
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
            {id:0, question:"Find the piano!", answer:"Piano", mode:"easy"},
            {id:1, question:"Click the clarinet!", answer:"Clarinet", mode:"easy"},
            {id:2, question:"Can you find the cello?", answer:"Cello", mode:"easy"},
            {id:3, question:"Where is the trumpet?", answer:"Trumpet", mode:"easy"},
            {id:4, question:"Find the harp!", answer:"Harp", mode:"easy"},
            {id:5, question:"Can you spot the accordion?", answer:"Accordion", mode:"easy"},
            {id:6, question:"Where is the Saxophone?", answer:"Saxophone", mode:"easy"},
            {id:7, question:"Find a String instrument!", answer:"String", mode:"hard"},
            {id:8, question:"Which instrument is a Percussion instrument?", answer:"Drum", mode:"hard"}
        ])
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [mode, setMode] = useState("easy");


    const instrumentClick = (instrumentKey) => {
        const instrument = instruments[instrumentKey];
        setSelectedInstrument(instrument);
    }


    const pressPlay = () => {
        setSelectedInstrument(null);
        const easyQs = [];
        const hardQs = [];
        questions.forEach(question => {
            question.mode === "easy" ?
            easyQs.push(question) :
            hardQs.push(question)
        });
        const randomEasyQ = easyQs[Math.floor(Math.random() * easyQs.length)]
        const randomHardQ= hardQs[Math.floor(Math.random() * hardQs.length)]
        mode === "easy" ? setSelectedQuestion(randomEasyQ) 
        : setSelectedQuestion(randomHardQ)

        
    }

    const resetEverything = () => {
        setSelectedInstrument(null);
        setSelectedQuestion(null);
        setMode("easy");
    }

    const modeChange = () => {
        mode === "easy" ? setMode("hard") : setMode("easy")
    }




    return (
        <div className="music-box">
            <div className="side-bar">
                <Title ></Title>
                <GameButton selectedQuestion={selectedQuestion} selectedInstrument={selectedInstrument} pressPlay={pressPlay}></GameButton>
                <GameWords mode={mode} selectedQuestion={selectedQuestion} selectedInstrument={selectedInstrument}></GameWords>
                <ResetButton resetEverything={resetEverything}></ResetButton>
                <ModeToggle modeChange={modeChange}></ModeToggle>
            </div>
            <InstrumentList instrumentClick={instrumentClick} instruments={instruments}></InstrumentList>

        </div>
    )
}

export default MusicBox;