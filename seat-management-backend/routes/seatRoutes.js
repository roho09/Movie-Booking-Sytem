// seat-management-backend/routes/seatRoutes.js

const express = require('express');
const router = express.Router();
const seatController = require('../controllers/seatcontroller');

// Route to get all seats
router.get('/seats', seatController.getAllSeats);

// Route to lock a seat
router.put('/seats/:seatId/lock', seatController.lockSeat);

// Route to release a locked seat
router.put('/seats/:seatId/release', seatController.releaseSeat);

module.exports = router;
