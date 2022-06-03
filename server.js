const express = require('express')
const app = require("liquid-express-views")(express())
const budgets = require('./models/budget.js')


const port = 3000

app.use((req, res, next) => {
    console.log('I run for all routes')
    next()
})

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello')
})

app.post('/budgets', (req, res) => {
    budgets.push(req.body)
    res.redirect('/budgets')
})

app.get('/budgets/', (req, res) => {
    res.render('index.liquid', {
        allBudget: budgets
    })
})

app.get('/budgets/new', (req, res) => {
    res.render('new.liquid')
})

app.get('/budgets/:index', (req, res) => {
    res.render('show.liquid', {
        budget: budgets[req.params.index]
    })
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

