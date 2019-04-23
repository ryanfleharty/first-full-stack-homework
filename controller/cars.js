const express = require('express')
const router = express.Router()
const Car = require('../models/car')

router.get('/', (req, res) => {
  Car.find({}, (error, CarsDB) => {
    if(error) {
      res.send(error)
      console.log(error);
    } else {
      res.render('index.ejs', {cars: CarsDB})
    }
  })
})

router.post('/', (req, res) => {
  Car.create(req.body, (err, createdCar) => {
  if(err) {
    res.send(err)
  } else {
    res.redirect('/cars')
    }
  })
})
router.get('/new', (req, res) => {
  res.render('new.ejs')
})
router.put('/:id', (req, res) => {
  Car.findByIdAndUpdate(req.params.id, req.body, (err, updateCar) => {
      res.redirect('/cars')
  })
})
router.delete('/:id', (req, res) => {
  Car.findByIdAndDelete(req.params.id, (err, deleteCar) => {
    if(err) {
      res.send(err)
    } else {
      console.log(deleteCar);
    }
  })
  res.redirect('/cars')
})
router.get('/:id', (req, res) => {
  Car.findById(req.params.id, (err, foundCar) => {
    if(err) {
      res.send(err)
    } else {
      res.render('show.ejs', {cars: foundCar})
    }
  })
})


module.exports = router
