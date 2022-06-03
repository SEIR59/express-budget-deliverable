const express = require("express")
const app = require("liquid-express-views")(express())
const budget = require('./models/budget.js')

app.listen(3000, () => {
    console.log("Working")
})

app.use(express.urlencoded({extended: false }))
app.use(express.static('public'))

app.get('/budget', (req, res) => {
    res.render('index', {
        Budget: budget
    })
})

app.get('/budget/new', (req,res) => {
    res.render('new')
})


app.get('/budget/:index', (req, res) => {
    res.render('show', {
        Budget: budget[req.params.index]
    })
})

app.post('/budget', (req,res) => {
    res.send(req.body)
})




