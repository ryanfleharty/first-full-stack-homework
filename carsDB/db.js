const mongoose = require('mongoose')

const connectionString = 'mongodb://localhost/cars'

mongoose.connect(connectionString, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${connectionString}`);
  });

  mongoose.connection.on('disconnected', () => {
    console.log(`Mongoose disconnected from ${connectionString}`);
  });

  mongoose.connection.on('error', (err) => {
    console.log(`Mongoose error: ${err}`);
  });
