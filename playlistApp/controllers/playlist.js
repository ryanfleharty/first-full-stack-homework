const express = require('express');
const router = express.Router();
const Playlist = require('../models/playlist');

router.get('/',(req, res)=>{
    Playlist.find({}, (error, wholePlaylist) => {

    if (error) {
        res.send(error);
    } else {
        res.render('index.ejs', {
            playlist: wholePlaylist
            });
        }
    })
});

router.get('/new',(req, res)=>{
    res.render('new.ejs',{
        playlist:Playlist
    });
});

router.post('/', (req, res) => {
    Playlist.create(req.body, (err, playlistItem) => {
        if (err) {
            res.send(err);
        } else {
            res.redirect('/playlist');
        } console.log(playlistItem)
    })
});

router.get('id:/edit',(req, res)=>{
    res.send('edit route hit')
});
module.exports = router;