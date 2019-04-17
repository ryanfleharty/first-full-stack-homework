const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/guitars';

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

mongoose.connection.on('error', (err) => {
  console.log(`Mongoose error: ${err}`);
});
