const express = require('express');
const app = express();

const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const morgan = require('morgan');

require('./db/db');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(morgan('short'));

const guitarsController = require('./controllers/guitars');

app.use('/guitars', guitarsController);

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
