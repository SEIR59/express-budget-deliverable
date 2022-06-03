const express = require("express")
const app = require("liquid-express-views")(express())
// const budget = require('./models/budget.js')

app.listen(3000, () => {
    console.log("Working")
})

app.get('/', (req, res) => {
    console.log("working")
    res.send("this one works")
})



