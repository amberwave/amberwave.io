const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
  Serves as a way to group nodes 
*/
const NetworkSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  name: {
    type: String,
    required: true,
  },
  nodes: {
    type: [Schema.Types.ObjectId],
    ref: 'nodes',
  },
});

module.exports = Network = mongoose.model('networks', NetworkSchema);
