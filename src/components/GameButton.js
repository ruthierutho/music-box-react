import React from 'react';

const GameButton = ({pressPlay}) => {


    const handleClick = () => {
        pressPlay()
    }



    return (
        <button className="game-button" onClick={handleClick}>PLAY!</button>
    )
}

export default GameButton;