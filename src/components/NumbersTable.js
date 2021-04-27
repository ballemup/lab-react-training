import React from 'react';

function NumbersTable(props) {

    let container = {height: "300px", width: "500px"}
    let red = {width: '96px', height: '96px', backgroundColor: "red"}
    let square = {width: '96px', height: '96px'}
    let array = []

    for(let i=1; i<props.limit+1; i++) {
        if(i%2 === 0) {
           array.push(<div style={red}>{i}</div>) 
        } else {
            array.push(<div style={square}>{i}</div>)
        }
    }
    
    
    
    
    
    
    
    return (
        <div className="container">
            {array}
        </div>
    );
}

export default NumbersTable;