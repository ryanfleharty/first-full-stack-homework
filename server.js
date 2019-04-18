const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('./db/db');

const foodController = require('./controllers/foodController');

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(morgan('short'));
app.use('/foodapp', foodController);
app.use(express.static('public'));


const port = 3000;
app.listen(port, () => {
    console.log('Server is listening');
});