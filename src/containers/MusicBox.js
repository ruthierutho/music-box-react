import React from 'react';
import Title from '../components/Title';
import InstrumentList from '../components/InstrumentList';
import GameButton from '../components/GameButton';
import GameWords from '../components/GameWords';


function MusicBox() {





    return (
        <>
        <h1>MusicBox Container</h1>
        <Title></Title>
        <InstrumentList></InstrumentList>
        <GameButton></GameButton>
        <GameWords></GameWords>
        </>
    )
}

export default MusicBox;