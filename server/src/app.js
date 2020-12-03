// Third Party Libraries
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

// Express App Setup
const app = express();
const { connectDB } = require('./config/db');

// environment: development, staging, testing, production
const environment = process.env.NODE_ENV;

// Server Config
if (process.env.NODE_ENV !== 'test') {
  connectDB();
}

// API Data Streams
app.use(express.json());

//Bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const routes = require('./routes/v1/index');
app.set('etag', false); // turn off


// v1 Api Routes
app.use('/v1', routes);

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

module.exports = app;