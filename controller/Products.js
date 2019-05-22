const express = require('express');
const router = express.Router();
const Product = require('./models');
const mongoose = require('mongoose');



router.get('/', async (req, res) => {
    try {
        const foundProduct = await Product.find({});
        res.render('product/index.ejs', {
            Product: foundProduct
        });
    } catch (err) {
        res.send(err)
    }
});

router.get('/new', async (req, res) => {
    res.render('product/new.ejs')
});

router.post('/', async (req, res) => {
    try {
        const createdProduct = await Product.create(req.body);
        console.log(createdProduct);
        res.redirect('/product');
    } catch (err) {
        console.log(err)
        res.send(err)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const allProducts = await Product.findById(req.params.id)
        res.render('product/show.ejs', {
            Product: allProducts
        });
    } catch (err) {
        console.log(err);
        res.send(err);
    }
});

router.put('/:id/edit', async (req, res) => {
    try {
        const foundProduct = await Product.findById(req.params.id)
        res.render('product/edit.ejs', {
            Product: foundProduct
        })
    } catch (err) {
        res.send(err)
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updateProduct = await Product.findByIdAndUpdate(req.params.id);
        res.redirect('/product')
    } catch (err) {
        res.send(err)
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const foundProduct = await Product.findByIdAndDelete(req.params.id);
        const deleteProduct = await Product.findOne({ 'product': req.params.id })

        res.redirect('/product')
    } catch (err) {
        res.send(err);
    }
});




module.exports = router;