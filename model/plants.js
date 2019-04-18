const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
    name: {type: String, required: true},
    color: {type: String, required: true},
    leafType: {type: String, required: true}
});

// mongoose.model() returns an object that has all the methods
// to interact with mongodb and perform crud operations
// this also creates a 'fruits' collection!
const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;
