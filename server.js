const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
require('./carsDB/db')

const carsController = require('./controller/cars')


app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'))
app.use('/cars', carsController)

const port = 3000
app.listen(port, () => {
  console.log(`listening to ${port}`);
})
