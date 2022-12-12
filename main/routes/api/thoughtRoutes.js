const { getAllThoughts, createThought } = require('../../controllers/thoughtControllers')
const router = require('express').Router()

router.route('/').get(getallThoughts)

router.route('/:thoughtId').get(get)