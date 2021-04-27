import React from 'react';

function BoxColor(props) {
let temp = Math.floor(Math.random() * 255);

let bgStyle = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    color: `rgb(${temp}, ${temp}, ${temp})`,
    padding: '50px',
};



return (
    <   div className={'container center'} style={bgStyle}>
        rgb({props.r}, {props.g}, {props.b})
        </div>
    );
}

export default BoxColor;