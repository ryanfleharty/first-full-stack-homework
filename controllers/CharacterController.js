const express = require('express');
const router = express.Router();
const Character = require('../models/Characters');

router.get('/', (req, res)=>{
    // find all of the cats, stored in a variable called catsFromTheDatabase
    Character.find({}, (err, charsFromDB)=>{
        // render the index page 
        res.render('../views/index.ejs', {
        // names a variable to be displayed on the index.ejs
            Characters: charsFromDB
        })
    })
})

router.get('/new', (req, res) =>{
	res.render('../views/new.ejs')
})





















module.exports = router;