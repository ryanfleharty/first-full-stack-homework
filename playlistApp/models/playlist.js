// const mongoose = require('mongoose'); //require mongoose package
// const Schema = mongoose.Schema; //mongoose has many properties on it.  One is a constructor function for Schemas

// const playlistSchema = new Schema({
//     song: {
//         type: String,
//         required: true,
//         unique: true
//     }, 
//     artist: {
//         type: String,
//         required: true
//     },
// });

//Creating an playlist class -- will be stored in 'playlists' collection.  Mongo does this for you automatically
//const Playlist = mongoose.model('playlist', playlistSchema);

const Playlist = [{song:"Sunglasses at Night", artist: "Eddie Money"}, {song:"Never Gonna Give You Up", artist: "Rick Astley"}]
module.exports = Playlist;