const router = require('express').Router();
const { getAllUser, getUserById, createUser, updateUser, deleteUser, addFriend, deleteFriend } = require('../../controllers/user-controller');

// GET and POST routes that use /api/users
router
    .route('/')
    .get(getAllUser)
    .post(createUser);

// GET one, PUT, and DELETE routes that use /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

router
    .route('/:userId/:friendId')
    .put(addFriend)
    .delete(deleteFriend)


module.exports = router;
