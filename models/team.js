const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: {type: String, required: true},
    league: {type: String},
    image: {type: String},
    isBest: Boolean
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;