require('./db/db');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./controllers/got');
const Got = require('./models/got');



//middleware:
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use('/got', router);












app.listen(3000, () => {
    console.log('app is listening on port 3000');
});