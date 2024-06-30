// src/components/Confirmation.js
import React from 'react';

const Confirmation = ({ movie, selectedSeats, showtime, totalPrice }) => {
  return (
    <div>
      <h2>Booking Confirmation</h2>
      <p>Movie: {movie.title}</p>
      <p>Selected Seats: {selectedSeats.join(', ')}</p>
      <p>Showtime: {showtime}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Thank you for booking!</p>
    </div>
  );
};

export default Confirmation;
