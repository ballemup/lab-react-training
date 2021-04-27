import React from 'react';

function CreditCard(props) {
    let img = ""
    const container = {
        backgroundColor : props.bgColor

    }
    if (props.type === "Visa"){ img = "/img/visa.png"}else {
        img = "/img/master-card.svg"
    }
    return (
        <div className="container cc " style={container}>
        <div>
            <img className='cardLogos' src={img} />
        </div>
        <div>**** **** **** {props.number.slice(-4)}</div>


    <div>{props.expirationMonth}/{props.expirationYear}<span>{props.bank}</span></div>
       
        
        <div>{props.owner}</div>
        <div>{props.bgColor}</div>
        <div>{props.color}</div>
            
        </div>

    );
}

export default CreditCard;