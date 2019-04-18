const express = require('express');
const router = express.Router();
const Pizza = require('../models/pizzaSchema');

router.get('/', function(req, res)
{
	Pizza.find({}, function(err, pizzasFound)
	{
		if (err) {console.log(err);}
		else
		{
			res.render('index.ejs', {pizzas: pizzasFound});
			console.log("GET /pizza: rendered pizza index.ejs");
		}
	});
});

router.get('/new', function(req, res)
{
	res.render('new.ejs');
	console.log("GET /pizza/new, rendered pizza new.ejs")
});

router.get('/:id', function(req, res)
{
	Pizza.findById(req.params.id, function(err, itemFound)
	{
		if (err) {console.log(err);}
		else
		{
			res.render('show.ejs', {pizza: itemFound});
			console.log(`GET /pizza/${req.params.id}: rendered pizza show.ejs for pizza with id of ${req.params.id}`)
		}
	});
});

router.get('/:id/edit', function(req, res)
{
	Pizza.findById(req.params.id, function(err, itemFound)
	{
		if (err) {console.log(err);}
		else
		{
			res.render('edit.ejs', {pizza: itemFound});
			console.log(`GET /pizza/${req.params.id}/edit: rendered pizza edit.ejs for pizza with id of ${req.params.id}`)
		}
	});
});

router.put('/:id', function(req, res)
{
	Pizza.findByIdAndUpdate(req.params.id, req.body, function(err, itemFound)
	{
		if (err) {console.log(err);}
		else
		{
			res.redirect('/pizza');
			console.log(`PUT /pizza/${req.params.id}: edited pizza with id of ${req.params.id}`)
		}
	});
});

router.delete('/:id', function(req, res)
{
	Pizza.findByIdAndDelete(req.params.id, function(err, itemFound)
	{
		if (err) {console.log(err);}
		else
		{
			res.redirect('/pizza');
			console.log(`DELETE /pizza/${req.params.id}: deleted pizza with id of ${req.params.id}`)
		}
	});
});

router.post('/', function(req, res)
{
	Pizza.create(req.body, function(err, createdPizza)
	{
		if (err) {console.log(err);}
		else
		{
			res.redirect('/pizza');
			console.log("POST /pizza, created new pizza");
		}
	});
});

module.exports = router;