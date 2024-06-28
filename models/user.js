const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  displayName: { type: String, required: true },
  profilePicture: { type: String, default: '' }
});

module.exports = mongoose.model('User', UserSchema);