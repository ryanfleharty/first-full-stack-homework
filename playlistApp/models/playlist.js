const mongoose = require('mongoose'); //require mongoose package
const Schema = mongoose.Schema; //mongoose has many properties on it.  One is a constructor function for Schemas

const playlistSchema = new Schema({
    song: {
        type: String,
        required: true,
        unique: true
    }, 
    artist: {
        type: String,
        required: true
    },
});

const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;