const mongoose = require('mongoose');
const { TIME } = require('sequelize/types');
const Schema = mongoose.Schema;

// Create Schema
// Id, Name, Location, Status, Messages, Creation Date, Uptime
const NodeSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  location: {
    longitude: {
      type: Number,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
    radius: {
      type: Number,
    },
  },
  status: {
    type: String,
    required: true,
  },
  history: {
    dateCreated: {
      type: Date,
      default: Date.now,
    },
    dateDestroyed: {
      type: Date,
    },
    lastConnection: {
      type: Date,
      default: null,
    },
    upTime: {
      type: Number,
      default: 0,
    },
    downTime: {
      type: Number,
      default: 0,
    },
  },
  connection: {
    exchange: {
      type: String,
    },
    queue: {
      type: String,
    },
  },
});

module.exports = User = mongoose.model('nodes', NodeSchema);
