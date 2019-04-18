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
})

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
})


// create

// edit

// delete

module.exports = router;