const router = require("express").Router()
const User = require("../User")

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
