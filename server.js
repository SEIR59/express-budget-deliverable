const express = require('express')
const app = require('liquid-express-views')(express())
const port = 3000

app.use(express.static(__dirname))

app.get('/budgets', (req, res) => {
    res.render('index')
})

app.get('budgets/new', (req, res) => {
    res.render('new')
})

app.get('/budgets/:index', (req, res) => {
    res.render('show', {
        budget: budgets[req.params.index]
    })
})

app.listen(port, () => {
    console.log(`Listening to port: ${port}`)
})