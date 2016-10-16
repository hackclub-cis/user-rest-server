const userRouter = require("express").Router()
const User = require("../User")

/**
* @api {get} /api/users Retrieve list of users
*
* @apiReturn {Boolean} success     Boolean indicator for success of retrieval
* @apiReturn {String} message      Success/error message
* @apiSuccess {Object} data        Array of user objects
*/
userRouter.get("/", (req, res, next) => {
    User.find({}, (err, users) => {
        if (err) {
            next(err)
        } else {
            res.json({
                success: true,
                message: "Successfully retrieved users",
                data: users
            })
        }
    })
})
/**
* @api {post} /api/users Create a new user
*
* @apiParam {String} username   User's username
* @apiParam {String} password   User's password
* @apiParam {String} email      User's email address
*
* @apiReturn {Boolean} success     Boolean indicator for success of retrieval
* @apiReturn {String} message      Success/error message
* @apiSuccess {Object} data        Newly created user object
*/
userRouter.post("/", (req, res, next) => {
    User.create(req.body, (err, user) => {
        if (err)
            next(err)
        else {
            res.json({
                success: true,
                message: "Successfully created user",
                data: user
            })
        }
    })
})
module.exports = userRouter
