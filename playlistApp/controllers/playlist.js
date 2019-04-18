const express = require('express');
const router = express.Router();
//const Playlist = require('../models/playlist');

router.get('/',(req, res)=>{
    res.send('index route hit');
});



module.exports = router;