import React from 'react';

const GameWords = ({ selectedQuestion }) => {

    return (

        selectedQuestion === null ? 
        <h3 className="game-words">Press <br></br>Play!</h3> 
        : <h2 className="game-words">{selectedQuestion.question}!</h2>

    )

}

export default GameWords;
