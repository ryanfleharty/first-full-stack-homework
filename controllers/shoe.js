const express = require('express');
const router = express.Router();
const Shoe = require('../models/shoe');

// INDEX ROUTE
router.get('/', (req, res) => {
    Shoe.find({}, (err, findShoe)=>{
        if(err){
            console.log(err)
        }else{
            console.log(findShoe);
            res.render('index.ejs', {shoe: findShoe})
        }
    }
    )
});

// CREATE ROUTE
router.post('/', (req, res) => {
    Shoe.create(req.body, (err, newShoe) => {
        if(err){
            console.log(err)
        }else{
            console.log(newShoe)
            res.redirect('/shoe')
        }
    });
});

router.get('/new', (req, res) => {
    res.render('new.ejs')
});

// SHOW ROUTE

router.get('/:id', (req, res)=>{
    Shoe.findOne({_id: req.params.id}, ( err, foundShoe) =>{
    if (err){
        res.send(err);
    } else {
        console.log(foundShoe)
        if(foundShoe != null){
            res.render('show.ejs', {shoe: foundShoe});

        } else {
            res.send('no shoe found');
        }
    }
 })
}); 

// DELETE ROUTE
router.delete('/:id', (req, res) => {
    Shoe.findByIdAndDelete({_id: req.params.id}, (err, deletedShoe) =>{
      if (err){
        console.log(err)
      } else {
        console.log(deletedShoe);
        res.redirect('/shoe')
      }
    })
  
  });

  // EDIT ROUTE 

router.get('/:id/edit', (req, res) => {
    Shoe.findOne({_id: req.params.id}, (err, foundShoe) =>{
        if(err){
            res.send(err);
        } else {
            console.log(foundShoe);
            if(foundShoe != null){
                res.render('edit.ejs', {shoe: foundShoe});
            }
        }
    })
  })


module.exports = router; 