const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  case: {
    type: String,
    required: true,
    ref: 'Case',
    index: true,
    index: { unique: true }
  },
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('schedule', scheduleSchema);
