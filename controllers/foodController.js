const express = require('express');
const router = express.Router();
const Food = require('../models/food');


// index
router.get('/', (req, res)=> {
    Food.find({}, (err, foods) => {
        if (err){
            res.send(err);
        } else {
            res.render('index.ejs', {
                'foods': foods,
            })
        }
    })
});

// create
router.get('/new', (req, res) => {
    res.render('new.ejs');
});

router.post('/', (req, res) => {
    if (req.body.healthy === 'on'){
        req.body.healthy = true;
    } else {
        req.body.healthy = false;
    }
    if (req.body.comfort === 'on'){
        req.body.comfort = true;
    } else {
        req.body.comfort = false;
    }
    Food.create(req.body, (err, newFood) => {
        if (err) {
            res.send(err);
        } else (
            res.redirect('/foodapp')
        )
    })
});

// show
router.get('/:id', (req, res) => {
    Food.findById(req.params.id, (err, foundFood) => {
        if (err) {
            res.send(err);
        } else {
            res.render('show.ejs', {
                'food': foundFood,
            })
        }
    })
});


// edit

// delete

module.exports = router;