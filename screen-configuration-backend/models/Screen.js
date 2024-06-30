// screen-configuration-backend/models/Screen.js

const mongoose = require('mongoose');

const screenSchema = new mongoose.Schema({
  name: { type: String, required: true },
  capacity: { type: Number, required: true, min: 1 }
});

const Screen = mongoose.model('Screen', screenSchema);

module.exports = Screen;
