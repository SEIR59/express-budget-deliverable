const express = require("express")
const app = require("liquid-express-views")(express())
const budget = require('./models/budget.js')

app.listen(3000, () => {
    console.log("Working")
})

app.use(express.urlencoded({extended: false }))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', {
        Budget: budget
    })
})





