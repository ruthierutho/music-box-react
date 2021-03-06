import React from 'react';
import useSound from 'use-sound';

import honk from '../static/wrong_answer.mp3'

const HonkButton = () => {
    const [play] = useSound(honk);

    return <button className="honk" onClick={play}>HONK!</button>
}

export default HonkButton;
