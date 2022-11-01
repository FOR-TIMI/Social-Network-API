const router = require('express').Router();
const { 
     getAllUsers
    ,addFriend
    ,removeFriend
    ,getOneUser
    ,deleteUser
    ,updateUser
    ,createNewUser
} = require('../../controllers/user-controller')


/*
* Expect endPoint : /api/user 
*/
router
    .route('/')
    .get(getAllUsers)
    .post(createNewUser)


/**
 * Expect endpoint : /api/user/:id
 */
router
    .route('/:id')
    .get(getOneUser)
    .put(updateUser)
    .delete(deleteUser)


/**
 * Expect endpoint : /api/user/:id/friends/:friendId
 */ 
 router
    .route('/:id/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend)




module.exports= router