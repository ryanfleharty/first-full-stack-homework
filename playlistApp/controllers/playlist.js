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
router.get('/:id/edit', (req, res) => {
    Playlist.findById(req.params.id, (err, found) => {
        if (err) {
            res.send(err);
        } else {
            res.render('edit.ejs', {
                playlist: found
            });
        }
    })

});
//delete
router.delete('/:id', (req, res) => {
    Playlist.findByIdAndRemove({
        _id: req.params.id
    }, (err, deleted) => {
        if (err) {
            res.send(err);
        } else {
            console.log(deleted);
            res.redirect('/playlist');
        }
    })

});

//show
router.get('/:id', (req, res) => {
    Playlist.findById(req.params.id, (err, found) => {
        if (err) {
            res.send(err);
        } else {
            res.render('show.ejs',{
                playlist:found
            });
        }
    })

});



module.exports = router;