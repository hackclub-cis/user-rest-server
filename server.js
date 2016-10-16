const express = require("express")
const http = require("http")
const bodyParser = require("body-parser")
const app = express()
const server = http.createServer(app)
const mongoose = require("mongoose")

const userRouter = require("./api/user")
const loginRouter = require("./api/login")

mongoose.connect("mongodb://localhost:27017/test", err => {
    if (err)
        throw err
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use("/api/users", userRouter)
app.use("/login", loginRouter)


app.use((req, res, next) => {
    var err = new Error("Route not found")
    err.status = 404
    next(err)
})
app.use(function (err, req, res, next) {
    if (err.status == 404) {
        res.status(404).json({
            success: false,
            message: "endpoint not found"
        })
    } else {
        next(err)
    }
})
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        success: false,
        message: err.message || 'Internal server error'
    })
    console.log(err)
});



server.listen(3000, function(err) {
    if (err)
        console.log(err)
    else {
        console.log("Server listening on port: 3000")
    }
})
