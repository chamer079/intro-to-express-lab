// Step 1)import express
const express = require("express")

// Step 2)initialize the app
const app = express()

// Step 4) define a test home route
app.get('/', (req, res) => {
    res.send("Express Lab Home")
})

//1. Be Polite, Greet the User
    // Task: Create a route that responds to URLs like /greetings/<username-parameter>.
    // Response: Include the username from the URL in the response, such as “Hello there, Christy!” or “What a delight it is to see you once more, Mathilda.”
app.get('/greetings/:username', (req, res) => {
    res.send(`Welcome back, ${req.params.username}!`)
    console.log(`Welcome back, ${req.params.username}`)
})


//2. Rolling the Dice
    // Task: Set up a route to handle URLs following the pattern /roll/<number-parameter>.
    // Validation: If the parameter is not a number, respond with “You must specify a number.” For instance, /roll/potato should trigger this response.
    // Functionality: If a valid number is provided, respond with a random whole number between 0 and the given number. For example, a request to /roll/16 might respond with “You rolled a 14.”
app.get('/roll/:num', (req, res) => {
    const num = parseInt(req.params.num) //<- will need to use parseInt when 
    const randomNum = Math.floor(Math.random() * num)
    
    if(isNaN(num) || num < 0 || num > num){
        console.log("You must specify a number. Please provide an actual numerical number, or a number between 0 and 100.")
        return res.send("You must specify a number. Please provide an actual numerical number, or a number between 0 and 100.")
    }
    res.send(`You rolled ${randomNum}`)
    console.log(`You rolled ${randomNum}`)
})

//3. I Want THAT One!
    // Task: Create a route for URLs like /collectibles/<index-parameter>
    // Validation: If the index does not correspond to an item in the array, respond with “This item is not yet in stock. Check back soon!”
    // Response: Should describe the item at the given index, like “So, you want the shiny ball? For 5.95, it can be yours!” Include both the name and price properties.
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];

app.get('/collectibles/:index', (req, res) => {
    const index = parseInt(req.params.index)

    if(index >= collectibles.length){
        return res.send("This item is not yet in stock. Check back soon!")
    }
    res.send(`So, you want the ${collectibles[index].name}? For $${collectibles[index].price}, it can be yours!`)
    // console.log(collectibles[index].name, collectibles[index].price)
})
     



// Step 3)start the listener method
app.listen(3000, () => {
    console.log("Listening on port 3000")
})