const jwt = require('jsonwebtoken');
const User = require('../models/user');

const createUser = async (username, password, displayName, profilePicture) => {
  try {
    const user = new User({ username, password, displayName, profilePicture });
    return await user.save();
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate key error
      if (error.keyPattern.username) {
        throw new Error('Username already exists.');
      }
      if (error.keyPattern.displayName) {
        throw new Error('Display Name already exists.');
      }
    } else {
      throw error;
    }
  }
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
};

const deleteUser = async (id) => {
  const user = await getUserById(id);
  if (!user) {
    return null;
  }
  await user.deleteOne();
  return user;
};

const getUserById = async (id) => {
  return await User.findById(id);
};

const findUserByUsernameAndPassword = async (username, password) => {
  return await User.findOne({ username, password });
};

const generateToken = (user) => {
  const payload = { username: user.username, displayName: user.displayName };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
};

module.exports = {
  createUser, getUsers, updateUser, deleteUser, getUserById, findUserByUsernameAndPassword, generateToken
};
