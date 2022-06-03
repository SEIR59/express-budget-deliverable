const express = require('express')
const app = require("liquid-express-views")(express())
const budgets = require('./models/budget.js')

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(express.static('public'))

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello')
})

app.get('/budgets/', (req, res) => {
    res.render('index.liquid', {
        allBudget: budgets
    })
})

app.get('/budgets/:index', (req, res) => {
    // res.render('show.liquid', {
    //     budget: budgets[req.params.index]
    // })
    //res.send(budgets[req.params.index])
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

