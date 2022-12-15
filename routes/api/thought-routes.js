const router = require('express').Router();
const { getAllThought, getThoughtById, createThought, deleteThought, updateThought, addReaction, deleteReaction } = require('../../controllers/thought-controller');

// GET route that use /api/thoughts
router
    .route('/')
    .get(getAllThought);

// POST route that uses /api/thoughts/:userId
router
    .route('/:userId')
    .post(createThought);

// PUT route that use /api/:thoughtId/reactions
router
    .route(('/:thoughtId/reactions'))
    .put(addReaction)

// GET, PUT, DELETE routes that use /api/thoughts/:userId/:thoughtId
router
    .route('/:userId/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// DELETE route that uses /:thoughtId/reactions/:reactionId
router
    .route(('/:thoughtId/reactions/:reactionId'))
    .delete(deleteReaction)

module.exports = router;
