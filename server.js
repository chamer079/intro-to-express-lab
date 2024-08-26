// Step 1)import express
const express = require("express")

// Step 2)initialize the app
const app = express()

// Step 4) define a test home route
app.get('/', (req, res) => {
    res.send("Express Lab Home")
})

//1. Be Polite, Greet the User
//Task: Create a route that responds to URLs like /greetings/<username-parameter>.
//Response: Include the username from the URL in the response, such as “Hello there, Christy!” or “What a delight it is to see you once more, Mathilda.”
app.get('/greetings/:username', (req, res) => {
    res.send(`Welcome back, ${req.params.username}`)
    console.log(`Welcome back, ${req.params.username}`)
})





// Step 3)start the listener method
app.listen(3000, () => {
    console.log("Listening on port 3000")
})