const express = require('express');
const router = express.Router();
const Playlist = require('../models/playlist');

//index
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

//create
router.get('/new',(req, res)=>{
    res.render('new.ejs',{
        playlist:Playlist
    });
});

//update
router.post('/', (req, res) => {
    Playlist.create(req.body, (err, playlistItem) => {
        if (err) {
            res.send(err);
        } else {
            res.redirect('/playlist');
        } console.log(playlistItem)
    })
});

//edit
router.get('/id:/edit',(req, res)=>{
    res.render('edit.ejs', ({
        id: req.params.id
    }))
});

//show
router.get('/id:',(req, res)=>{
    Playlist.findOne(req.params.id, (err, playlistItem) => {
    if (err) {
        res.send(err);
    } else {
        res.redirect('show.ejs', {
            playlist: playlistItem
        });
    }
    console.log(playlistItem)
    })
    });
    

module.exports = router;