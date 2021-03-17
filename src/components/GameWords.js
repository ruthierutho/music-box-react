import React from 'react';

const GameWords = ({ selectedQuestion, selectedInstrument}) => {

    const displayWords = 

        selectedQuestion === null && selectedInstrument === null 
        || selectedQuestion === null && selectedInstrument !== null ? 
        <h3 className="game-words">PRESS <br></br>PLAY!</h3> 
        : selectedQuestion !== null && selectedInstrument === null ? 
        <h3 className="game-words">{selectedQuestion.question}</h3>
        : selectedInstrument !== null && selectedInstrument.name === selectedQuestion.answer ? 
        <h3 className="game-words">Well Done! You found the {selectedQuestion.answer}!</h3>
        : selectedInstrument !== null && selectedInstrument.name !== selectedQuestion.answer ?
        <h3 className="game-words"> Try Again! </h3>
        : ""
        
    

    return (


        displayWords 
    

    )

}

export default GameWords;
