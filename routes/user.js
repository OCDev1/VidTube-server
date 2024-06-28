const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.route('/users')
    .get(userController.getUsers)
    .post(userController.createUser);

router.route('/users/signin')
    .post(userController.signInUser);

router.route('/users/:id')
    .get(userController.getUser)
    .delete(userController.deleteUser)
    .patch(userController.updateUser);

module.exports = router;
