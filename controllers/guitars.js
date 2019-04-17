const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Guitars = require('../models/Guitars');

router.get('/', (req, res) => {
  // res.send('The Index route was hit');
  Guitars.find({}, (err, guitarsFound) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log(guitarsFound);
      res.render('index.ejs', { guitars: guitarsFound });
    }
  });
});

module.exports = router;