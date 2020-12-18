const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  node: {
    type: Schema.Types.ObjectId,
    ref: 'nodes',
  },
  message: {
    type: String,
    required: true,
  },
  queue: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Message = mongoose.model('messages', MessageSchema);
