const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.route('/')
    .get(userController.getUsers)
    .post(userController.createUser);

router.route('/signin')
    .post(userController.signInUser);

router.route('/:id')
    .get(userController.getUser)
    .delete(userController.deleteUser)
    .patch(userController.updateUser);

module.exports = router;
