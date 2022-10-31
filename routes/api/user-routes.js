const router = require('express').Router();
const { 
     getAllUsers
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




module.exports= router