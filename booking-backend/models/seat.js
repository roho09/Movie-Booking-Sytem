const mongoose = require('mongoose');

const seatSchema = new mongoose.Schema({
  screen: Number,
  seatNumber: String,
  isBooked: Boolean,
});

module.exports = mongoose.model('Seat', seatSchema);
