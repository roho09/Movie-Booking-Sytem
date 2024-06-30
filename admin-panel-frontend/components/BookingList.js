import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('/api/bookings')
      .then(response => setBookings(response.data))
      .catch(error => console.error('Error fetching bookings:', error));
  }, []);

  return (
    <div>
      <h2>Booking List</h2>
      <ul>
        {bookings.map(booking => (
          <li key={booking.id}>{booking.details}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;
