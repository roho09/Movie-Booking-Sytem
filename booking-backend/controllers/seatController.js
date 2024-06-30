const Seat = require('../models/seat');

exports.getSeats = async (req, res) => {
  try {
    const seats = await Seat.find({ screen: req.params.screen });
    res.json(seats);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching seats' });
  }
};
