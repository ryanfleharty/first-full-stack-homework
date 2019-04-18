const express = require('express')
const router = express.Router()
const Cars = require('../models/cars')

router.get('/', (req, res) => [
  Cars.find({}, (error, allCarsDB) => {
    if(error) {
      res.send(error)
      console.log(error);
    } else {
      res.render('index.ejs', {cars:allCarsDB})
    }
  })
])

module.exports = router 
