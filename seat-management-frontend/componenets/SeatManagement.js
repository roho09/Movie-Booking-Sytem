// seat-management-frontend/src/components/SeatManagement.js

import React from 'react';
import axios from 'axios';

const SeatManagement = ({ seat }) => {
  const lockSeat = (seatId) => {
    axios.put(`http://localhost:5000/api/seats/${seatId}/lock`)
      .then(response => {
        console.log(response.data.message);
        // Optionally update state or notify user
      })
      .catch(error => {
        console.error('Error locking seat:', error);
      });
  };

  const releaseSeat = (seatId) => {
    axios.put(`http://localhost:5000/api/seats/${seatId}/release`)
      .then(response => {
        console.log(response.data.message);
        // Optionally update state or notify user
      })
      .catch(error => {
        console.error('Error releasing seat:', error);
      });
  };

  return (
    <div>
      <h3>Seat Management</h3>
      <p>Seat Number: {seat.number}</p>
      <p>Availability: {seat.available ? 'Available' : 'Not Available'}</p>
      {seat.available ? (
        <button onClick={() => lockSeat(seat._id)}>Lock Seat</button>
      ) : (
        <button onClick={() => releaseSeat(seat._id)}>Release Seat</button>
      )}
    </div>
  );
};

export default SeatManagement;
