const mongoose = require("mongoose")
const model = 'day'
const moods = [
  'happy',
  'sad',
  'anxious',
  'mad',
  'neutral'
];

const schema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
    unique: true,
  },
  morningMood: {
    type: String,
    enum: moods,
    default: 'neutral',
  },
  afternoonMood: {
    type: String,
    enum: moods,
    default: 'neutral',
  },
  nightMood: {
    type: String,
    enum: moods,
    default: 'neutral',
  },
  nightReflection: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model(model, schema)
