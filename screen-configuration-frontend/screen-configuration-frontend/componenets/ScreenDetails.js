import React from 'react';

const ScreenDetails = ({ screen }) => {
  return (
    <div>
      <h3>{screen.name}</h3>
      <p>Capacity: {screen.capacity}</p>
    </div>
  );
};

export default ScreenDetails;
