const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const pizzaController = require('./controllers/pizzaController');

require('./db/db');

const app = express();


app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));
app.use('/pizza', pizzaController);


let port = process.env.PORT;
if (!process.env.PORT) {port = 3000;}




app.listen(port, function(req, res)
{
	console.log(`Server listening on port ${port}`);
});