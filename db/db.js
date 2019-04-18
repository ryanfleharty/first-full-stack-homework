// db connects mongoose and mongodb on this page!
// we'll need to require this doc in the server because
// it will provide the necessary connection to the db 
// before we actually can try to do anything on the server. 

const mongoose = require('mongoose');

// this names the db
const connectionString = 'mongodb://localhost/fruits';

// this is connecting to running mongodb on terminal
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// add event listeners for when a connection occurs (or is removed)
mongoose.connection.on('connected', ()=>{
    console.log(`mongoose connected to ${connectionString}`);
});

mongoose.connection.on('disconnected', ()=>{
    console.log(`mongoose disconnected from ${connectionString}`);
});

mongoose.connection.on('error', (err)=>{
    console.log(`mongoose error: ${err}`);
});
