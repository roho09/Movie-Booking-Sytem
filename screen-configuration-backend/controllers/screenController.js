// screen-configuration-backend/controllers/screenController.js

const Screen = require('../models/Screen');

// Create a new screen
exports.createScreen = async (req, res) => {
  try {
    const { name, capacity } = req.body;
    const newScreen = new Screen({ name, capacity });
    await newScreen.save();
    res.status(201).json(newScreen);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all screens
exports.getAllScreens = async (req, res) => {
  try {
    const screens = await Screen.find();
    res.json(screens);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single screen by ID
exports.getScreenById = async (req, res) => {
  try {
    const screen = await Screen.findById(req.params.id);
    if (!screen) {
      return res.status(404).json({ message: 'Screen not found' });
    }
    res.json(screen);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a screen by ID
exports.updateScreen = async (req, res) => {
  try {
    const { name, capacity } = req.body;
    const updatedScreen = await Screen.findByIdAndUpdate(
      req.params.id,
      { name, capacity },
      { new: true }
    );
    if (!updatedScreen) {
      return res.status(404).json({ message: 'Screen not found' });
    }
    res.json(updatedScreen);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a screen by ID
exports.deleteScreen = async (req, res) => {
  try {
    const deletedScreen = await Screen.findByIdAndDelete(req.params.id);
    if (!deletedScreen) {
      return res.status(404).json({ message: 'Screen not found' });
    }
    res.json({ message: 'Screen deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
