import React from 'react';

function Greetings(props) {
    let greeting = ""
    if(props.lang==="de") greeting = 'Hallo ';
    if(props.lang==="fr") greeting = 'Bonjour ';
    if(props.lang==="es") greeting = 'Hola ';
    if(props.lang==="en") greeting = 'Hello ';
    return (

        <div className="container">
            {greeting} {props.children}
        </div>
    );
}

export default Greetings;