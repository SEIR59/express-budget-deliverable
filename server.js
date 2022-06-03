const express = require('express')
const Budget = require('./models/budget.js')
const app = require('liquid-express-views')(express())

const budget = require('./models/budget.js')

app.use((req, res, next) =>{
    console.log('I run for all routes')
    next()
})

app.use(express.urlencoded({extended: false}))

app.use(express.static('public'))

app.get('/budget', (req ,res) => {
    res.render(
        'index',
        {
            allBudget: budget
        }
    )
})

app.post('/budget', (req, res) => {
    console.log(req.body)
    Budget.push(req.body)
    res.redirect('/budget')
})

app.get('/budget/new', (req, res) => {
    res.render('new')
})


app.get('/budget/:indexOfBudgetArray', (req, res) =>{
    res.render(
        'show',
        {
            budget: budget[req.params.indexOfBudgetArray]
        }
    )
})


app.listen(4000, () => {
    console.log('listen to port 4000')
})