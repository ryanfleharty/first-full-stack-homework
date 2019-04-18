const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: {type: String, required: true},
    meal: {type: String, required: true},
    healthy: Boolean,
    comfort: Boolean,
    rating: {type: Number, min: 0, max: 10},
});

const Food = mongoose.model('Food', foodSchema);
module.exports = Food;