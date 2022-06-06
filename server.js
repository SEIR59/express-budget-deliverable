const express = require('express')
const app = require('liquid-express-views')(express())
const port = 3000
const budget = require('./models/budget.js')
// app.get('/', (req, res) =>{
//     res.send("If you see me I work.")
// })

app.use(express.static('public'))

app.use(express.urlencoded({ extended: false })) // body-parser

app.post('/', (req, res) => {
    budget.push(req.body);
    res.redirect('/');
})

app.get('/', (req, res) => {
    res.render(
        'index', {
            budgets: budget
        }
    )
})

app.get('/show/:budgetIndex', (req, res) => {
    res.render(
        'show', {
            budgets: budget[req.params.budgetIndex]
        }
    )
})

app.get('/new/', (req, res) =>{
    res.render(
        'new'
    )
})

app.listen(port, ()=> {
    console.log("Now Listening to Port 3000 :)")
})