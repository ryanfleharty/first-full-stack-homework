const express = require('express')
const router = express.Router()
const Car = require('../models/car')

// router.get('/', async (req, res) => {
//   try {
//     const carFound = await Car.find({})
//     res.render('index.ejs', {
//       cars: CarsDB
//     })
//   } catch(err) {
//     res.send(err)
//   }
// })
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
router.get('/cars:id', (req, res) => {
  res.render('show.ejs', {cars: CarsDB[req.params.id]})
})
router.post('/', async (req, res) => {
  try {
    const carCreated = await Car.create(req.body)
    res.redirect('/cars')
  } catch(err) {
    res.send(err)
  }
})
// router.post('/', (req, res) => {
//   console.log(req.body);
//   Car.create(req.body, (err, createdCar) => {
//   if(err) {
//     res.send(err)
//   } else {
//     res.redirect('/cars')
//     }
//   })
// })
router.get('/new', async (req, res) => {
  try {
    res.render('new.ejs')
  } catch (err) {
    res.send(err)
  }
})
// router.get('/new', (req, res) => {
//   res.render('new.ejs')
// })

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


module.exports = router
