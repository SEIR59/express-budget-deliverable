const express = require('express')
const app = require('liquid-express-views')(express())
const port = 3000

app.listen(port, () => {
    console.log(`port 3000 listens`)
})

app.get('/', (req, res) => {
    res.send(`Hello Tran!`)
})

app.get('/budgets', (req, res) => {
    res.render(
        'index'
    )
})

app.get('/budgets/new', (req, res) => {
    res.render(
        'new'
    )
})

app.get('/budgets/:index', (req, res) => {
    res.render(
        'show'
    )
})

