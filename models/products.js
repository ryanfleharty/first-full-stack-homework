const mongoose = require('mongoose');

const productShema = new product.Schema({
    name: {type: String, required: true},
    brand: {type: String, required: true},
    size: {type: String, required: true, maxlength: 1}
});





module.exports = product;