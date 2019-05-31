require('./db/db');
const express = require('express')
const mongoose = require('mongoose')
const app = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser')
const morgan = require('morgan');
const router = require('./controllers/friends')


app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('short'));
app.use('/friends', router)








app.listen(3000, ()=>{
    console.log('listening on port 3000')
});