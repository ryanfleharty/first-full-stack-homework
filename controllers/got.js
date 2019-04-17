const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Got = require('../models/got');




router.get('/', (req, res) => {
    Got.find({}, (err, allCharacters) => {
        if(err) {
            res.send(err);
        } else {
            res.render('index.ejs', {got: allCharacters});
        }
    })
});

















module.exports = router;




