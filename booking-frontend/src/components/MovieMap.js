// src/components/SeatMap.js
import React, { useState } from 'react';

const SeatMap = ({ seats }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatId) => {
    // Toggle seat selection
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  return (
    <div>
      <h2>Seat Selection</h2>
      <div className="seat-map">
        {seats.map(seat => (
          <div
            key={seat.id}
            className={`seat ${selectedSeats.includes(seat.id) ? 'selected' : ''}`}
            onClick={() => handleSeatClick(seat.id)}
          >
            {seat.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeatMap;
