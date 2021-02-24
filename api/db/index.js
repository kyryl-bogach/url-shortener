const mongoose = require('mongoose');

const connectionString = 'mongodb://mongo/link';

const connectWithRetry = () => mongoose.connect(connectionString, err => {
  if (err) {
    console.error('Failed to connect to mongo on startup - retrying in 5 sec', err);
    setTimeout(connectWithRetry, 5000);
  }
});

connectWithRetry();

const db = mongoose.connection;

module.exports = db;
