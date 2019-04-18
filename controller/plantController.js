

const express = require('express');
const router = express.Router();
const Plant = require('../model/plants');

// INDEX ROUTE
router.get('/', (req, res)=>{
    Plant.find({}, (err, allPlants) => {
        if(err){
            console.log(err)
        }else{
            console.log(allPlants);
            res.render('index.ejs')
        }
    })
});

// NEW ROUTE
router.get('/new', (req, res) => {
    res.render('new.ejs');
  });

// CREATE ROUTE
router.post('')

// SHOW ROUTE
router.get('')

// DELETE ROUTE
router.delete('')

// EDIT ROUTE
router.get('')

// UPDATE ROUTE
router.put('')


module.exports = router;