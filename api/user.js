const userRouter = require("express").Router()
const User = require("../User")

/**
* /api/users GET
* @param
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
