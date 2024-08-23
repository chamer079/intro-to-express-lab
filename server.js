// 1)import express
const express = require("express")

// 2)initialize the app
const app = express()

// 4) define a test home route
app.get('/', (req, res) => {
    res.send("Express Lab Home")
})




// 3)start the listener method
app.listen(3000, () => {
    console.log("Listening on port 3000")
})