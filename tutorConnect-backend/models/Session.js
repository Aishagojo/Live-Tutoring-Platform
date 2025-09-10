
const h mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  tutor: { type: mongoose.Schema.Types.ObjectId, ref: 'Tutor', required: true },
  date: { type: Date, required: true },
  feedback: { type: String, required: false },
});

module.exports = mongoose.model('Session', sessionSchema);
