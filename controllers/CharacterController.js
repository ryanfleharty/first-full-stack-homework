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


// Edit Route
router.get('/:id/edit', (req, res) =>{
    Character.findById(req.params.id, (error, foundChar) =>{
      if (error){
        console.log(error)
      } else {
        console.log(foundChar);
	res.render('edit.ejs', {
		id: req.params.id,
		Character: foundChar

	});
	}
	})
});


// Update Route
router.put('/:id', (req, res)=>{
	Character.findOneAndUpdate({_id: req.params.id}, req.body, (err, updatedChar)=>{
	if(req.body.alive === 'on'){
		req.body.alive = true;
	}	else {
		req.body.alive = false
	}
		if(err) {
			console.log(err);
		} else {
			updatedChar = req.body;
			res.redirect('/');
			console.log(updatedChar);
		}
	})
})


// Delete Route
router.delete('/:id', (req, res) => {
    Character.findByIdAndDelete(req.params.id, (error, deletedItem) =>{
      if (error){
        console.log(error)
      } else {
        console.log(deletedItem);
        res.redirect('/')
      }
    })
  });


// Show Route
router.get('/:id', (req, res) =>{
	Character.findById(req.params.id, (err, foundChar)=>{
		if(req.body.alive === 'on'){
			req.body.alive = true;
		}	else {
			req.body.alive = false
		}
		res.render('show.ejs', {
		id: req.params.id,
		character: foundChar
		})
	});

});





module.exports = router;

