const mongoose = require('mongoose');

const guitarSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  type: String,
  make: String,
  strings: Number,
  famousGuitarists: [String],
});

const Guitars = mongoose.model('Guitars', guitarSchema);

module.exports = Guitars;
