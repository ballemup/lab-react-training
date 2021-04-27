import React, { useState } from 'react';
let i = 1

function Carousel(props) {
    let [currentPic, setCurrentPic] = useState(0)

    const minus = () => {
        setCurrentPic((--currentPic + props.imgs.length) % props.imgs.length)

    }

    const plus = () => {
        setCurrentPic(++currentPic % props.imgs.length)
    }

    return (
        <div>
            <button onClick={minus}>{'<'}</button>
            <img src={props.imgs[currentPic]} alt='imgs' />
            <button onClick={plus}>{'>'}</button>
        </div>
    );
}

export default Carousel;