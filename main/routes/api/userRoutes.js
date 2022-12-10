const { getUsers, createUser, getSingleUser, deleteUser, updateUser } = require('../../controllers/userControllers');
const router = require('express').Router();

// GET req for all users, POST req for creating a new user
router.route('/').get(getUsers).post(createUser);

// GET, PUT and DELETE req for single user by ID
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser)

module.exports = router;