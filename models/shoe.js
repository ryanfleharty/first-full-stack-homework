const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema({
    style: String,
    size: Number,
    Color: String

});

const Shoe = mongoose.model('Shoe', shoeSchema);

module.exports = Shoe; 