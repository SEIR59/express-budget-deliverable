// pulling necessary information
const express = require('express')
const app = require("liquid-express-views")(express())

// pulling data
const Budget = require('./models/budget.js')

// indicating which port is being used
let port = 3000
app.listen(port, ()=>{
    console.log("Using port: ", port)
})

// setting up middleware
app.use(express.urlencoded({extended:false})); // to view request.body
app.use(express.static('public')); // to use css

// rendering the homepage
app.get("/", (request, response) => {
    response.render('index', {
        Budget: Budget
    })
})