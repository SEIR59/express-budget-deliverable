const express = require('express');
const budget = require('./models/budget.js')
const app = require("liquid-express-views")(express())

app.use((req, res, next) => {
    console.log('I run for all routes')
    next()
})

app.use(express.urlencoded({ extended: false }))

app.use(express.static('public')); //tells express to try to match requests with files in the directory called 'public'


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/budget', (req, res) => {
    res.render("index")
})



app.listen(3000, () => {
    console.log("listening on port 3000!")
})