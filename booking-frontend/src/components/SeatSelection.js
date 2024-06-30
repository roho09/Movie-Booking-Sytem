// src/components/SeatSelection.js
// src/components/SeatSelection.js
import './SeatSelection.css';

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SeatSelection = () => {
  const { movieId } = useParams();
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch seat map from the backend API
    const fetchSeats = async () => {
      try {
        const response = await fetch(`/api/seats/${movieId}`);
        const data = await response.json();
        setSeats(data);
      } catch (error) {
        console.error('Error fetching seats:', error);
      }
    };

    fetchSeats();
  }, [movieId]);

  const handleSeatClick = (seat) => {
    if (!seat.booked) {
      setSelectedSeats((prev) =>
        prev.includes(seat.id)
          ? prev.filter((id) => id !== seat.id)
          : [...prev, seat.id]
      );
    }
  };

  const handleReserve = () => {
    // Navigate to reservation form
    navigate('/reservation', { state: { movieId, selectedSeats } });
  };

  return (
    <div>
      <h2>Select Your Seats</h2>
      <div className="seat-map">
        {seats.map((seat) => (
          <div
            key={seat.id}
            className={`seat ${seat.booked ? 'booked' : ''} ${
              selectedSeats.includes(seat.id) ? 'selected' : ''
            }`}
            onClick={() => handleSeatClick(seat)}
          >
            {seat.id}
          </div>
        ))}
      </div>
      <button onClick={handleReserve} disabled={selectedSeats.length === 0}>
        Reserve
      </button>
    </div>
  );
};

export default SeatSelection;
