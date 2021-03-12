import React from 'react';

const GameButton = ({pressPlay, selectedQuestion, selectedInstrument}) => {


    const handleClick = () => {
        pressPlay()
    }



    return (
        
        <button className="game-button" onClick={handleClick}>
            {selectedQuestion === null && selectedInstrument === null 
            || selectedQuestion !== null && selectedInstrument === null 
            || selectedQuestion === null && selectedInstrument !== null
            || selectedQuestion !== null && selectedInstrument.name !== selectedQuestion.answer ? 
            <h2 className="game-button-words">PLAY!</h2>
            : <h3 className="game-button-words"> PLAY <br></br>AGAIN!</h3>}
            </button>
    )
}

export default GameButton;