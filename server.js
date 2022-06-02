const express = require('express')
const app = require('liquid-express-views')(express())
const port = 3000
const budget = require('./models/budget')

app.get('/', (req, res) => {
    res.render('index', 
    {
        allBudgetItems : budget
    })
})

app.get('/:index', (req, res) => {
    res.render('show', 
    {
        budgetItem : budget[req.params.index]
    })
})

app.listen(port, () => {
    console.log('listening on port: ' + port)
})

// express.static()