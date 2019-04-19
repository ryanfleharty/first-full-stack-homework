const express = require('express');
const router  = express.Router();
const Coffee  = require('../models/coffee');



//index route
router.get('/', (req, res) =>{
Coffee.find({}, (err, createACoffee) => {

    if(err){
    res.send(err);
    } else {
        res.render('index.ejs', {coffee: createACoffee});
    }
})
});

//Delete Route
router.delete('/:id', (req, res) => {
Coffee.findByIdAndRemove({_id: req.params.id}, (err, deleteCoffee) => {
    
    if(err){
    res.send(err);
    } else {
    console.log(deleteCoffee);
        res.redirect('/coffee')
     }
})  
})

//edit route
router.put('/:id', (req, res)=>{
    if(req.body.isInstant === 'on'){
        req.body.isInstant = true;
    } else {
        req.body.isInstant = false;
    }
    Coffee.findOneAndUpdate(req.params.id, req.body, {new: true}, (err, updatedModel)=>{
          res.redirect('/coffee');
    });
});


router.get('/:id/edit', (req, res)=>{
    Coffee.findById(req.params.id, (err, foundCoffee)=>{ 
        res.render(
        'edit.ejs',
        {
          coffee: foundCoffee
        }
      );
    });
});

//create route
router.post('/', (req, res) => {
console.log(req.body,"<-- req.body will have the contents of the form");

if(req.body.isInstant === 'on'){
    req.body.isInstant = true;
} else{
    req.body.isInstant = false
}

Coffee.create(req.body, (err, createACoffee) => {
    if(err){
        res.send(err);
    } else {
        res.redirect('/coffee');
    }
});
});



//new route
router.get('/new', (req, res) => {
    res.render('new.ejs');
   });
module.exports = router; 





//show route
router.get('/:id', (req, res) => {

Coffee.findOne({_id: req.params.id}, (err, foundCoffee) =>{
    if(err){
        res.send(err);
    } else {
        console.log(typeof foundCoffee, 'foundCoffee');
        if(foundCoffee != null){

            res.render('show.ejs', {
            coffee: foundCoffee
            });
        }else{
            res.send('no coffee found')
        }
    }
});
    
});