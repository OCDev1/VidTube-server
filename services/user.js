const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Comment = require('../models/comment');
const Video = require('../models/video');

const createUser = async (username, password, displayName, profilePicture) => {
  try {
    const user = new User({ username, password, displayName, profilePicture });
    return await user.save();
  } catch (error) {
    if (error.code === 11000) {
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

const updateUser = async (username, newUsername, password, displayName, profilePicture) => {
  try {
    const user = await findUserByUsername(username);
    if (!user) {
      throw new Error('User not found.');
    }

    const oldUsername = user.username;
    
    if (newUsername) user.username = newUsername;
    if (password) user.password = password;
    if (displayName) user.displayName = displayName;
    if (profilePicture) user.profilePicture = profilePicture;

    await user.save();

    const updateFields = {};
    if (newUsername) updateFields.username = newUsername;
    if (displayName) updateFields.author = displayName;
    if (profilePicture) updateFields.authorImage = profilePicture;

    if (Object.keys(updateFields).length > 0) {
      await Video.updateMany({ username: oldUsername }, updateFields);
    }

    return user;
  } catch (error) {
    if (error.code === 11000) {
      if (error.keyPattern.username) {
        return { error: 'Username already exists.' };
      }
      if (error.keyPattern.displayName) {
        return { error: 'Display Name already exists.' };
      }
    } else {
      throw error;
    }
  }
};

const deleteUser = async (username) => {
  const user = await findUserByUsername(username);
  if (!user) {
    return null;
  }
  await user.deleteOne();

  await Comment.deleteMany({ username });
  await Video.deleteMany({ username });
  return user;
};

const findUserByUsername = async (username) => {
  return await User.findOne({ username });
};

const findUserByUsernameAndPassword = async (username, password) => {
  return await User.findOne({ username, password });
};

const generateToken = (user) => {
  const payload = { username: user.username, displayName: user.displayName };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
};

module.exports = {
  createUser, getUsers, updateUser, deleteUser, findUserByUsername, findUserByUsernameAndPassword, generateToken
};
