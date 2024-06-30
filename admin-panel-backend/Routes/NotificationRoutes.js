const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

router.post('/booking-confirmation', notificationController.sendBookingConfirmation);
router.post('/seat-availability', notificationController.sendSeatAvailabilityAlert);

module.exports = router;
