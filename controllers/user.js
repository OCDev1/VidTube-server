const userService = require('../services/user');

const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body.username, req.body.password, req.body.displayName, req.body.profilePicture);
    res.json(user);
  } catch (error) {
    res.status(400).json({ errors: [error.message] });
  }
};

const getUsers = async (req, res) => {
  res.json(await userService.getUsers());
};

const getUser = async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  if (!user) {
    return res.status(404).json({ errors: ['User not found'] });
  }
  res.json(user);
};

const signInUser = async (req, res) => {
  const user = await userService.findUserByUsernameAndPassword(req.body.username, req.body.password);
  if (!user) {
    return res.status(401).json({ errors: ['Invalid username or password'] });
  }
  const token = userService.generateToken(user);
  res.json({ user, token });
};

const updateUser = async (req, res) => {
  const user = await userService.updateUser(req.params.id, req.body.username, req.body.password, req.body.displayName, req.body.profilePicture);
  if (!user) {
    return res.status(404).json({ errors: ['User not found'] });
  }
  res.json(user);
};

const deleteUser = async (req, res) => {
  const user = await userService.deleteUser(req.params.id);
  if (!user) {
    return res.status(404).json({ errors: ['User not found'] });
  }
  res.json(user);
};

module.exports = {
  createUser, getUsers, getUser, updateUser, deleteUser, signInUser
};
