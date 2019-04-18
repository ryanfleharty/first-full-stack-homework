const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Guitars = require('../models/Guitars');


// INDEX Route
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

// UPDATE ROUTE
router.post('/', (req, res) => {
  // res.send('The Index route was hit');
  Guitars.create(req.body, (err, newGuitar) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log(newGuitar);
      res.redirect('/guitars');
    }
  });
});

// NEW Route
router.get('/new', (req, res) => {
  res.render('New.ejs');
});

//  DELETE Route
router.delete('/:id', (req, res) => {
  Guitars.findByIdAndDelete(req.params.id, (err, deletedGuitar) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log(deletedGuitar);
      res.render('/guitars');
    }
  });
});

//  UPDATE Route
router.put('/:id', (req, res) => {
  Guitars.findByIdAndUpdate(req.params.id, req.body, (err, updatedGuitar) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log(updatedGuitar);
      // Guitars[req.params.id] = req.body;
      res.redirect('/guitars');
    }
  });
});

// EDIT Route
router.get('/:id/edit', (req, res) => {
  Guitars.findById(req.params.id, (err, updatedGuitar) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log(updatedGuitar);
      res.render('edit.ejs', { guitar: updatedGuitar });
    }
  });
});

// SHOW Route
router.get('/:id', (req, res) => {
  // res.send('The Index route was hit');
  Guitars.findById(req.params.id, (err, guitarFound) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log(guitarFound);
      res.render('show.ejs', { guitar: guitarFound });
    }
  });
});

module.exports = router;