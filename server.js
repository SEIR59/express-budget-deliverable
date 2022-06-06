const express = require('express')
const app = require('liquid-express-views')(express())
const port = 3000
const budgets = require('./models/budgets.js')

app.use(express.static(__dirname))

app.post('/budgets', (req, res) => {
    budgets.push(req.body)
    res.redirect('/budgets')
})

app.get('/budgets', (req, res) => {
    res.render('index', {
        allBudgets: budgets
    })
})

app.get('/budgets/new', (req, res) => {
    res.render('new')
})

app.get('/budgets/:indexOfBudget', (req, res) => {
    res.render('show', {
        budget: budgets[req.params.indexOfBudget]
    })
})

app.listen(port, () => {
    console.log(`Listening to port: ${port}`)
})