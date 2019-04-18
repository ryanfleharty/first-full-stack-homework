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

router.get('/:id', (req, res) => {
    shoe.findById(req.params.id, (err, foundShoe) => {
        if(err){
            console.log(err);
            res.send(err);
        } else {
            res.render('show.ejs', {shoe: foundShoe});
        }
    })
})


// DELETE ROUTE
router.delete('/:id', (req, res) => {
    Shoe.findByIdAndDelete(req.params.id, (err, deletedShoe) =>{
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
    Shoe.findById(req.params.id, (err, foundShoe) => {
        if(err){
            console.log(err);
            res.send(err);
        } else {
            res.render('edit.ejs', {shoe: foundShoe});
        }
    })
})

// UPDATE
router.put('/:id', (req, res) => {
    Shoe.findByIdAndUpdate(req.params.id, req.body, (err, updateShoe) => {
        if(err){
            console.log(err);
            res.send(err);
        } else {
            console.log(updateShoe);
            res.redirect('/shoe', {shoe: updateShoe})
        }
    })
})

module.exports = router; 