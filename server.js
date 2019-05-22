const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override'); 
const mongoose = require('mongoose');


const productsController = require('./controller/Products');



app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', productsController);










const port = 3000;
app.listen(port, () => {
    console.log('server is listening to the hottest hits');
});