const mongoose = require('mongoose');

const thronesSchema = new mongoose.Schema({
    name: {type: String, required: true},
    gender: {type: String},
    age: {type: Number},
    house: {type: String},
    loves: {type: String}
})







const Got = mongoose.model('Got', thronesSchema);
module.exports = Got;




