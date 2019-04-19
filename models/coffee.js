const mongoose = require('mongoose');

const coffeeSchema = new mongoose.Schema({
name: {type: String, required: true},
type: String,
isInstant: Boolean
});

const Coffee = mongoose.model('Coffee', coffeeSchema);

module.exports = Coffee; 