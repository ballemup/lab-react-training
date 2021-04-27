import React from 'react';
import Rating from './Rating';

function DriverCard(props) {
  return (
    <div>
      <div>
        <img style={{ width: '100px' }} src={props.img} alt="person" />
      </div>

      <div>
        <span>{props.name}</span>
        <Rating>{props.rating}</Rating>
        <span>
          {props.car.model} - {props.car.licensePlate}
        </span>
      </div>
    </div>
  );
}

export default DriverCard;