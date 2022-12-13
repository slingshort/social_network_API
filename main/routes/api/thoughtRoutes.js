const { getAllThoughts, createThought, getSingleThought, updateThought, deleteThought, createReaction, deleteReaction } = require('../../controllers/thoughtControllers')
const router = require('express').Router()

// GET all thoughts
router.route('/').get(getAllThoughts)

// GET, POST, PUT (update) and DELETE req for thought by single ID
router.route('/:thoughtId').get(getSingleThought).post(createThought).put(updateThought).delete(deleteThought)

// POST reaction for a thought by thought ID
router.route('/:thoughtId/reactions').post(createReaction)

// DELETE reaction by ID (needs reaction ID to specify which needs to be deleted)
router.route(':/thoughtId/reactions/:reactionId').delete(deleteReaction)

module.exports = router;