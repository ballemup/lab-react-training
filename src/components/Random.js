import React from 'react';

function Random(props) {



  return (
    <div className={'container'}>
      Random value between {props.min} and {props.max} =&gt; {
      Math.floor(Math.random() * (props.max - props.min) + props.min)
    }
    </div>
  );
}

export default Random;