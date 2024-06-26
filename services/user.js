const User = require('../models/user');

const createUser = async (username, password, displayName, profilePicture) => {
  const user = new User({ username :username, password: password, displayName: displayName});
  if (profilePicture) {
    user.profilePicture = profilePicture;
  }
  return await user.save();
};

const getUsers = async () => {
  return await User.find({});
};

const updateUser = async (id, username, password, displayName, profilePicture) => {
  const user = await getUserById(id);
  if (!user) {
    return null;
  }
    user.username = username;
    user.password = password;
    user.displayName = displayName;
    user.profilePicture = profilePicture;
    await user.save();
    return user;
}

const deleteUser = async (id) => {
  const user = await getUserById(id);
  if (!user) {
    return null;
  }
  await user.deleteOne();
  return user;
}

const getUserById = async (id) => {
  return await User.findById(id); 
}

const findUserByUsernameAndPassword = async (username, password) => {
  return await User.findOne({ username, password });
};


module.exports = {
  createUser, getUsers , updateUser, deleteUser , getUserById, updateUser, deleteUser, findUserByUsernameAndPassword
};
