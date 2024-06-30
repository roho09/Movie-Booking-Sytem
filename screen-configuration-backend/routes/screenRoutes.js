// screen-configuration-backend/routes/screenRoutes.js

const express = require('express');
const router = express.Router();
const screenController = require('../controllers/screenController');

// CRUD operations
router.post('/', screenController.createScreen);
router.get('/', screenController.getAllScreens);
router.get('/:id', screenController.getScreenById);
router.put('/:id', screenController.updateScreen);
router.delete('/:id', screenController.deleteScreen);

module.exports = router;
