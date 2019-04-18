const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Got = require('../models/got');


//INDEX:
router.get('/', (req, res) => {
    Got.find({}, (err, allCharacters) => {
        if(err) {
            res.send(err);
        } else {
            res.render('index.ejs', {got: allCharacters});
        }
    })
});

//CREATE:
router.post('/', (req, res) => {
    Got.create(req.body, (err, newCharacter) => {
        if (err) {
            res.send(err);
        } else {
            res.redirect('/got');
        }
    });
});

router.get('/new', (req, res) => {
    res.render('new.ejs');
});

//SHOW:
router.get('/:id', (req, res) => {
    Got.findOne({_id: req.params.id}, (err, foundCharacter) => {
        if(err){
            res.send(err);
        } else {
            res.render('show.ejs', {
                got: foundCharacter
            })
        }
    })
});


//DELETE:
router.delete('/:id', (req, res) => {
    Got.findByIdAndDelete({_id: req.params.id}, (err, deletedCharacter) => {
        if(err){
            res.send(err);
        } else {
            res.redirect('/got');
        }
    })
});


























module.exports = router;




