const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');

require(`./db/db`); // needs to happen before controllers! 


// Require our controller
const plantController = require('./controller/plantController');

// middleWare
// We want to make sure that we set this up
// before our routes, because we want the request's body
// to parsed (readable, won't be undefined anymore)

// middleware is set up with the method app.use()
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
// app.use(function(req, res, next) {

// })
// First argument, is where we want all the routes in the controller (2nd arguemnt),
// to live at, So every single rout in fruitsContoller /fruits
app.use('/plants', plantController);


app.listen(3000, () => {
  console.log('app listening on port: ', 3000);
});
