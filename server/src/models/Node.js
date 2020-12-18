const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
// Id, Name, Location, Status, Messages, Creation Date, Uptime
/* TODO Verify that you can save information from RabbitMQ and Send it to frontend
 */
const NodeSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  key: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  location: {
    longitude: {
      type: Number,
    },
    latitude: {
      type: Number,
    },
    radius: {
      type: Number,
    },
  },
  status: {
    type: String,
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

module.exports = Node = mongoose.model('nodes', NodeSchema);
