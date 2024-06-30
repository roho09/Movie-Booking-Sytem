const Booking = require('../models/booking');
const Seat = require('../models/seat');

exports.createBooking = async (req, res) => {
  try {
    const { movieId, seatIds, userId, showtime, totalPrice } = req.body;
    
    const booking = new Booking({
      movie: movieId,
      seats: seatIds,
      user: userId,
      showtime,
      totalPrice,
    });
    
    await Seat.updateMany(
      { _id: { $in: seatIds } },
      { $set: { isBooked: true } }
    );
    
    await booking.save();
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Error creating booking' });
  }
};
