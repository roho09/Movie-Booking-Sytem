const Notification = require('../models/Notification');
const emailService = require('../services/emailService');
const smsService = require('../services/smsService');

exports.sendBookingConfirmation = async (req, res) => {
  const { email, message } = req.body;
  try {
    const notification = new Notification({
      email,
      message,
      type: 'booking-confirmation',
    });
    await notification.save();

    await emailService.sendEmail(email, 'Booking Confirmation', message);
    // Optional: Send SMS if needed
    // await smsService.sendSMS(phone, message);

    res.json({ message: 'Booking confirmation sent successfully' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.sendSeatAvailabilityAlert = async (req, res) => {
  const { email, message } = req.body;
  try {
    const notification = new Notification({
      email,
      message,
      type: 'seat-availability',
    });
    await notification.save();

    await emailService.sendEmail(email, 'Seat Availability Alert', message);
    // Optional: Send SMS if needed
    // await smsService.sendSMS(phone, message);

    res.json({ message: 'Seat availability alert sent successfully' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
