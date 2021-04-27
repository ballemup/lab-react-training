import React, { useState } from 'react';
import profiles from './data/berlin.json';

console.log(profiles);

function FaceBook(props) {
  const showProfiles = () => {
    return profiles.map((profile) => {
      return (
        <div>
          <div>{profile.firstName}</div>;<div>{profile.lastName}</div>;
          <div>{profile.country}</div>;<img src={profile.img} />;
        </div>
      );
    });
  };

  return <div>{showProfiles()}</div>;
}

export default FaceBook;