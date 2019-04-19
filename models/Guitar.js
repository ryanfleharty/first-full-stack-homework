const mongoose = require('mongoose');

const guitarSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  type: String,
  make: String,
  strings: Number,
  famousGuitarists: [String],
  img: String,
});

const Guitar = mongoose.model('Guitar', guitarSchema);

module.exports = Guitar;
