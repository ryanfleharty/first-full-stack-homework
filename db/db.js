// REQUIRE THE STUFF
const mongoose = require('mongoose');
const Team = require('../models/team');
const connectionString = 'mongodb://localhost/test';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true, 
    useFindAndModify: false
});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${connectionString}`);
});

mongoose.connection.on('error', (error) => {
    console.log(`Mongoose connection error ${error}`);
});

mongoose.connection.on('disconnected', () => {
    console.log(`Mongoose disconnected from ${connectionString}`);
});



// const teamData = require('../populateTeams');
// Team.collection.insertMany(teamData, (err, data) => {
//     console.log('added team data');
//     mongoose.connection.close();
// });

