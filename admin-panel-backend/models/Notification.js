const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['booking-confirmation', 'seat-availability'],
    required: true,
  },
});

module.exports = mongoose.model('Notification', NotificationSchema);
