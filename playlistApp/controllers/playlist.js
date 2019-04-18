const express = require('express');
const router = express.Router();
const Playlist = require('../models/playlist');

router.get('/',(req, res)=>{
    res.render('index.ejs', {
        playlist: Playlist
    })
});

router.get('/new',(req, res)=>{
    res.send('new route hit')
});

router.post('/',(req, res)=>{
    res.send('create route hit')
})

router.get('id:/edit',(req, res)=>{
    res.send('edit route hit')
});
module.exports = router;