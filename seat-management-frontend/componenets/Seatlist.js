// seat-management-frontend/src/components/SeatList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SeatList = () => {
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    // Fetch seats from backend API
    axios.get('http://localhost:5000/api/seats')
      .then(response => {
        setSeats(response.data);
      })
      .catch(error => {
        console.error('Error fetching seats:', error);
      });
  }, []);

  return (
    <div>
      <h2>Available Seats</h2>
      <ul>
        {seats.map(seat => (
          <li key={seat._id}>
            <h3>Seat Number: {seat.number}</h3>
            <p>Availability: {seat.available ? 'Available' : 'Not Available'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SeatList;
