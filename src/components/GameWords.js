import React from 'react';

const GameWords = ({ selectedInstrument }) => {

    return (

        selectedInstrument === null ? 
        <h3 className="game-words">Choose an <br></br>Instrument!</h3> 
        : <h2 className="game-words">{selectedInstrument.name}!</h2>

    )

}

export default GameWords;
