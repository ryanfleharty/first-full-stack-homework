const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/foodapp';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${connectionString}`);
});

mongoose.connection.on('disconnected', () => {
    console.log(`Mongoose disconnected from ${connectionString}`);
});

mongoose.connection.on('error', () => {
    console.log(`Mongoose error: ${error}`);
});