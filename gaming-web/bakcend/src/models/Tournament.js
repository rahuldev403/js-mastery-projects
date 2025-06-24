const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  banner: { type: String }, // URL or file path
  game: { type: String, required: true },
  description: { type: String },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  entryFee: { type: Number, default: 0 },
  prizes: { type: String },
  liveYoutube: { type: String }, // YouTube live embed/link
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Tournament', tournamentSchema);
