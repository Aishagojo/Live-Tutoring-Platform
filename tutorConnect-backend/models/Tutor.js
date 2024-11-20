
const mongoose = require('mongoose');

const tutorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subject: { type: String, required: true },
  experience: { type: String, required: true },
  availability: [{ type: Date, required: true }],
  ratings: [Number],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
});

module.exports = mongoose.model('Tutor', tutorSchema);
