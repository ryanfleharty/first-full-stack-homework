

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
            res.render('index.ejs', {plant: allPlants})
        }
    })
});

// CREATE ROUTE
router.post('/', (req, res) => {
    Plant.create(req.body, (err, newPlant) => {
        if(err){
            console.log(err)
        }else{
            console.log(newPlant);
            res.redirect('/plants')
        }
    })
})

// NEW ROUTE
router.get('/new', (req, res) => {
    res.render('new.ejs');
  });



// SHOW ROUTE
router.get('/:id', (req, res) => {
    Plant.findById(req.params.id, (err, onePlant)=>{
        if(err){
            console.log(err)
        }else{
            console.log(onePlant);
            res.render('show.ejs', {plant: onePlant});
        }
    })
});

// UPDATE ROUTE
router.put('/:id', (req, res) => {
    Plant.findByIdAndUpdate(req.params.id, (err, updatedPlant)=>{
        if(err){
            console.log(err)
        }else{
            console.log(updatedPlant);
            res.render('show.ejs', {plant: updatedPlant})
        }
    })
});

// EDIT ROUTE
router.get('/:id/edit', (req, res) => {
    Plant.findById(req.params.id, (err, editPlant) => {
        if(err){
            console.log(err)
        }else{
            console.log(editPlant);
            res.render('edit.ejs', {plant: editPlant});
        }
    })
})


// DELETE ROUTE
router.delete('/:id', (req, res) => {
    Plant.findByIdAndDelete(req.params.id, (err, deletedPlant)=>{
        if(err){
            console.log(err)
        }else{
            console.log(deletedPlant);
            res.redirect('/plants');
        }
    })
});



module.exports = router;