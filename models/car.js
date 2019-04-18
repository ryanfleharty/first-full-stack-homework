const mongoose = require('mongoose')

const carSchema = New mongoose.Schema({
  year:{type:Date},
  make: {type: String, required: true},
  model: {type: String, required: true},
  color: {type: String}
})

const Car = mongoose.model('Car', carSchema)

module.exports = Car
