import React from 'react';

const GameWords = ({ selectedQuestion, selectedInstrument}) => {

    const stuff = 

        selectedQuestion === null && selectedInstrument === null ? 
        <h3 className="game-words">PRESS <br></br>PLAY!</h3> 
        : selectedQuestion !== null && selectedInstrument === null ? 
        <h2 className="game-words">{selectedQuestion.question}</h2>
        : selectedInstrument !== null && selectedInstrument.name === selectedQuestion.answer ? 
        <h3 className="game-words">Well Done! {selectedInstrument.name} = {selectedQuestion.answer}</h3>
        : selectedInstrument !== null && selectedInstrument.name !== selectedQuestion.answer ?
        <h2 className="game-words"> Try Again! </h2>
        : ""
        
    

    return (


        stuff
    

    )

}

export default GameWords;
