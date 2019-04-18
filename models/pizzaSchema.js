const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema(
	{
		name: String,
		crust: String,
		sauce: String,
		topping: String,
	}
);

const Pizza = mongoose.model('Pizza', pizzaSchema);

module.exports = Pizza;