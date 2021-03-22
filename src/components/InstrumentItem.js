import React from 'react';
import { useState } from 'react';
import useSound from 'use-sound';
import honk from '../static/wrong_answer.mp3'


const InstrumentItem = (props) => {

    const [play] = useSound(props.sound);
    const [play2] = useSound(honk)

    const handleClick = (event) => {
        props.instrumentClick(props.instKey)
        play(props.sound)
       
    }

    const handleClick2 = (event) => {
        props.instrumentClick(props.instKey)
        play2(honk)
    }

    const instrumentActions = 
    props.selectedQuestion !== null && props.selectedInstrument !== null 
    && props.name !== props.selectedQuestion.answer 
    || props.selectedQuestion !== null && props.selectedInstrument === null
    && props.name !== props.selectedQuestion.answer ?
        <li onClick={handleClick2} className="instrument">
            <img className="instrument-image" src={props.image} alt="icon of instrument" width="90px"/>
            <h3 className="instrument-word">{props.name}</h3>  
        </li>
    : 
        <li onClick={handleClick} className="instrument">
            <img className="instrument-image" src={props.image} alt="icon of instrument" width="90px"/>
            <h3 className="instrument-word">{props.name}</h3>  
        </li>
   

    return (
        <>
       {instrumentActions}
        </>
    )
}

export default InstrumentItem;