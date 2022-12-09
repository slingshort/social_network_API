const { getUsers, createUser } = require('../../controllers/userControllers');

const router = require('express').Router();

// GET req for all users, POST req for creating a new user
router.route('/').get(getUsers).post(createUser);

// GET req for single user by ID