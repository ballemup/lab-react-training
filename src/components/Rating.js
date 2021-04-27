import React from 'react';

function Rating(props) {
    let roundedNum = Math.round(props.children)

    return (
        <div>
            {'★'.repeat(roundedNum) + '☆'.repeat(5 - roundedNum)}
        </div>
    );
}

export default Rating;