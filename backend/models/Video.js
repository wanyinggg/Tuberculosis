// models/Video.js
const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  lastActionBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
  videoUrl: { type: String },
  status: { type: String, enum: ['pending upload for today', 'pending approval', 'approved', 'rejected'], default: 'pending upload for today' },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Video', videoSchema);
