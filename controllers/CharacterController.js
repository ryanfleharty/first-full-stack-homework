const express = require('express');
const router = express.Router();
const Character = require('../models/Characters');


// Index route
router.get('/', (req, res)=>{
    Character.find({}, (err, charsFromDB)=>{
        res.render('../views/index.ejs', {
            Characters: charsFromDB
        })
    })
})

// New Route
router.get('/new', (req, res) =>{
	res.render('../views/new.ejs')
})


// Create Route

router.post('/new', (req, res)=>{
	          if(req.body.alive === 'on'){
    req.body.alive = true;
  } else {
    req.body.alive = false
  }
    Character.create(req.body, (error, createdChar)=> {
        if (error){
            console.log(error)
        } else {

            console.log(createdChar);
            res.redirect('/');
        }
    })
});


















module.exports = router;