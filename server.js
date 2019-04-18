// REQUIRE THE STUFF
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

require('./db/db');
const teamController = require('./controllers/team');

//MIDDLEWARE
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.use('./team', teamController);








//LISTEN LINK
app.listen(3000, () => {
    console.log('listening on port 3000');
});

