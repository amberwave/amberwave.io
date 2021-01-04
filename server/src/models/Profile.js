const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Profile Schema defines information available to users
/* TODO: Profile should include all dashboard preferences
 */
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  handle: {
    type: String,
    required: true,
    max: 40,
  },
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
