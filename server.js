const express = require('express')
const Budget = require('./models/budget.js')
const app = require('liquid-express-views')(express())

const budget = require('./models/budget.js')

app.use((req, res, next) =>{
    console.log('I run for all routes')
    next()
})

app.use(express.static('public'))

app.get('/budget', (req ,res) => {
    res.render(
        'index',
        {
            allBudget: budget
        }
    )
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