const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../env/.env') });

// Third Party Libraries
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/v1/index');

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

app.set('etag', false); // turn off
// Set Headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
// v1 Api Routes
app.use('/v1', routes);

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

module.exports = app;