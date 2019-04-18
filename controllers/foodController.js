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
router.put('/:id', (req, res) => {
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
    Food.findByIdAndUpdate(req.params.id, req.body, (err, editedFood) => {
        if (err) {
            res.send(err)
        } else {
            console.log(editedFood);
            res.redirect('/foodapp')
        }
    })
});


router.get('/:id/edit', (req, res) => {
    Food.findById(req.params.id, (err, editedFood) => {
        if (err) {
            res.send(err)
        } else {
            res.render('edit.ejs', {
                'food': editedFood,
            })
        }
    })
});


// delete
router.delete('/:id', (req, res) => {
    Food.findByIdAndDelete(req.params.id, (err, deletedFood) => {
        if (err) {
            res.send(err)
        } else {
            res.redirect('/foodapp')
        }
    })
});

module.exports = router;