const userService = require('../services/user');

const generateToken = async (req, res) => {
  const user = await userService.findUserByUsernameAndPassword(req.body.username, req.body.password);
  if (!user) {
    return res.status(401).json({ errors: ['Invalid username or password'] });
  }
  const token = userService.generateToken(user);
  res.json({ user, token });
};

module.exports = {
  generateToken
};
