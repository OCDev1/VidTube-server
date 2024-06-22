const User = require('../models/user');

const createUser = async (username, password, displayName, profilePicture) => {
  const user = new User({ username :username, password: password, displayName: displayName});
  if (profilePicture) {
    user.profilePicture = profilePicture;
  }
  return await user.save();
};



module.exports = {
  createUser,
};
