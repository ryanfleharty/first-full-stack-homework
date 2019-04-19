const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Guitar = require('../models/Guitar');


// INDEX Route
router.get('/', (req, res) => {
  // res.send('The Index route was hit');
  Guitar.find({}, (err, guitarsFound) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log(guitarsFound);
      res.render('index.ejs', { guitars: guitarsFound });
    }
  });
});

// CREATE ROUTE
router.post('/', (req, res) => {
  // res.send('The Index route was hit');
  Guitar.create(req.body, (err, newGuitar) => {
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

// DELETE Route
router.delete('/:id', (req, res) => {
  Guitar.findByIdAndDelete(req.params.id, (err, deletedGuitar) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log(deletedGuitar);
      res.redirect('/guitars'); 
    }
  });
});

// UPDATE Route
router.put('/:id', (req, res) => {
  Guitar.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedGuitar) => {
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
  Guitar.findById(req.params.id, (err, updatedGuitar) => {
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
  Guitar.findById(req.params.id, (err, guitarFound) => {
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