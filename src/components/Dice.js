import React, {useState} from 'react';

function Dice(props) {
    let diceRolled = `/img/dice${Math.floor(Math.random() * 6 + 1)}.png`
    let [picture, setPicture] = useState(diceRolled)
    const randomDice = () => {
        setPicture('/img/dice-empty.png')
        setTimeout(() => {
            setPicture(diceRolled)
        }, 1000)
    }

    return (
        <div>
            <img onClick={randomDice} style={{height: '100px', width: '100px'}} src={picture} alt="dice" />
        </div>
    );
}

export default Dice;