const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
  seats: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Seat' }],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  totalPrice: Number,
  showtime: String,
});

module.exports = mongoose.model('Booking', bookingSchema);
