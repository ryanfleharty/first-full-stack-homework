const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override'); 


const product = require('product');
const router = require('router');

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', productsController);










const port = 3000;
app.listen(port, () => {
    console.log('server is listening to the hottest hits');
});