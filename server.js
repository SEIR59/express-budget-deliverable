// pulling necessary information
const express = require('express')
const app = require("liquid-express-views")(express())

// indicating which port is being used
let port = 3000
app.listen(port, ()=>{
    console.log("Using port: ", port)
})

// setting up middleware
app.use(express.urlencoded({extended:false})); // to view request.body
app.use(express.static('public')); // to use css

// checking if this works
app.get("/", (request, response) => {
    response.send("Hello World")
})