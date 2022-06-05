const express = require('express')
const app = require('liquid-express-views')(express())
const budget = require('./models/budget')


app.get('/', (req, res) => {
    res.render('index', {
        allItems: budget
    })
})

app.get('/:index', (req, res) => {
    res.render('show', {
        budgetItem: budget[req.params.index]
    })
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})