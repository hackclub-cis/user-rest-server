const router = require("express").Router()
const User = require("../User")

/**
* @api {post} /login Authenticate the user
*
* @apiParam {String} username   User's username
* @apiParam {String} password   User's password
*
* @apiReturn {Boolean} success     Boolean indicator for login success
* @apiReturn {String} message      Success/error message
*/
router.post("/", (req, res) => {
    User.find(req.body, (err, user) => {
        if (err)
            throw err
        else {
            res.json({
                success: true,
                message: "Logged in!"
            })
        }
    })
})

module.exports = router
