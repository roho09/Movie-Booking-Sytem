// seat-management-backend/controllers/seatController.js

let availableSeats = [
    { id: 1, number: 'A1', available: true },
    { id: 2, number: 'A2', available: true },
    { id: 3, number: 'A3', available: false },  // Example of a booked seat
    // Add more seats as needed
  ];
  
  // Get all seats
  const getAllSeats = (req, res) => {
    res.json(availableSeats);
  };
  
  // Lock a seat temporarily
  const lockSeat = (req, res) => {
    const { seatId } = req.params;
    const seat = availableSeats.find(seat => seat.id === parseInt(seatId));
    if (!seat || !seat.available) {
      return res.status(404).json({ message: 'Seat not available.' });
    }
  
    seat.available = false;  // Lock the seat
  
    // Implement logic to release seat after a certain time (not shown here)
  
    res.json({ message: `Seat ${seat.number} locked successfully.` });
  };
  
  // Release a locked seat
  const releaseSeat = (req, res) => {
    const { seatId } = req.params;
    const seat = availableSeats.find(seat => seat.id === parseInt(seatId));
    if (!seat || seat.available) {
      return res.status(404).json({ message: 'Seat is already available.' });
    }
  
    seat.available = true;  // Release the seat
  
    res.json({ message: `Seat ${seat.number} released successfully.` });
  };
  
  module.exports = {
    getAllSeats,
    lockSeat,
    releaseSeat
  };
  