// ---------------------------------
// Boilerplate Code to Set Up Server
// ---------------------------------

// importing our Node modules
import express from "express"
import fs from "fs/promises"

// creating an instance of the express module so that we can use all the methods that come with it.
const app = express()

// tell express which port to listen to to receive requests
const port = 3000;

// Tell express which port to listen to receipve requests
app.use(express.json())

app.listen(port, () => {
    console.log(`My server is listening on port: ${port}`)
})

// ---------------------------------
// Helper Functions
// ---------------------------------


// ---------------------------------
// Our very first API Endpoints
// ---------------------------------
// app.get() takes in 2 parameters:
// 1. The endpoint, which defines what a URL path the server should listen to
//  2. The callback function, what we do when we receive a request at the endpont
    // the callback function takes in 2 parametersL the request & response.
app.get("/", (req, res) => {
    // the res.send() method sends back a String as a response
    res.send("Hello, World")
})

app.get("/say-good-morning", (req, res) => {
    res.send("Good morning!")
})

app.get("/get-user/:userName", (req, res) => {
    const userName = req.params.userName
    res.send(`Hello, ${userName}!`)
})

app.get("/order-tacos/:protein/:numTacos", (req, res) => {
    const protein = req.params.protein
    const numTacos = req.params.numTacos

    res.send(`Thanks for your order! You ordered ${numTacos} ${protein} tacos`)
})

// --------------------------------
// 🚀 LEVEL 1 CHALLENGES 
// --------------------------------

// 1. 🏆 Add a /goodbye endpoint that responds with "Goodbye, see you later!"

// 2. 🏆 Add a /happy-birthday endpoint that responds with "Happy birthday!!!"

// --------------------------------
// 🚀 LEVEL 2 CHALLENGES — ADDING DYNAMIC PARAMETERS
// --------------------------------

// 1. 🏆 Add a /happy-birthday/:name endpoint says "Happy birthday, [name]!!!"

// 2. 🏆 Add a /say-hello/:name/:language endpoint that says hello in multiple languages. Examples:
//      - If language = "English", respond with "Hello, [name]!"
//      - If language = "Spanish", respond with "Hola, [name]!"
//      - If language = "Vietnamese", respond with "Xin chao, [name]!"
//      - If language = "Turkish", respond with "Merhaba, [name]!"
//      - Add as many languages as you want! 
//      - Otherwise, respond with "Language not supported."" 

// --------------------------------
// 🚀 LEVEL 3 CHALLENGES — EVEN MORE DYNAMIC PARAMETERS
// --------------------------------

// 1. 🏆 Add a /calculate-dog-years/:dogName/:humanYears endpoint that calculates a dog's age in dog years. Refer to your dogAgeCalculator.js file. 

// 2. 🏆 Add a /calculate-tip/:bill/:tipPercentage/:numGuests endpoint that calculates the amount each guests owes. Refer to your tipCalculator.js file. 

// --------------------------------
// LEVEL 4 CHALLENGES — USING THE FILE SYSTEM MODULE
// --------------------------------

// 1. 🏆 Add a /get-birthstone/:month endpoint that tells the user the birthstone for the inputted month using the fs module. Use the birthstones-data.json file in this folder.

// 2. 🏆 Add a /get-all-pizza-orders endpoint that responds with the array of pizza orders. Use the pizza-orders-data.json file in this folder.

// 3. 🏆 Add a /get-one-pizza-order/:index endpoint that responds with the specified pizza order. 

// --------------------------------
// 🚀 LEVEL 5 CHALLENGES — USING THIRD-PARTY MODULES
// --------------------------------

// 1. 🏆 Add a /is-leap-year/:year endpoint that responds with whether the specified year is a leap year. Use the moment third-party node module and refer to your leap-year.js file.

// 2. 🏆 Add a /get-signs/:month/:day/:year endpoint that responds with the user's astrological and zodiac signs based on their inputted birthday. Use the horoscope third-party node module and refer to your sign-finder.js file.

