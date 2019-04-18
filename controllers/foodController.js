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

// create

// edit

// delete

module.exports = router;