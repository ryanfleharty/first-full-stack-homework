const express         = require('express');
const app             = express();
const bodyParser      = require('body-parser');
const methodOverride  = require('method-override');

require('./db/db');

const coffeeController = require('./controllers/coffee.js');


app.use(bodyParser.urlencoded({extended: false})) 
app.use(methodOverride('_method'))
app.use('/coffee', coffeeController);



app.listen(3000, () => {
    console.log('app listening on port: ', 3000);
  });
  