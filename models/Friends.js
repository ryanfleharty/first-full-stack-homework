const mongoose = require('mongoose')


const friendsSchema = new mongoose.Schema({
    name: {type:String, required: true, unique:true},
    city: String,
    age: Number,
    qualities:[String]
})


const Friends = mongoose.model('Friends', friendsSchema);


module.exports = Friends


