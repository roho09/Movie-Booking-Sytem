const express = require('express');
const { getSeats } = require('../controllers/seatController');
const router = express.Router();

router.get('/:screen', getSeats);

module.exports = router;
