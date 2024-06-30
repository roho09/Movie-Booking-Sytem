// src/components/ReservationForm.js
import React, { useState } from 'react';

const ReservationForm = ({ onSubmit }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [numTickets, setNumTickets] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(selectedSeats, numTickets);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Reservation Details</h2>
      <label>Select Seats:</label>
      <input type="text" value={selectedSeats.join(', ')} readOnly />
      <label>Number of Tickets:</label>
      <input
        type="number"
        value={numTickets}
        onChange={(e) => setNumTickets(e.target.value)}
      />
      <button type="submit">Proceed to Payment</button>
    </form>
  );
};

export default ReservationForm;
