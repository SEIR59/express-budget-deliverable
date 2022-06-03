const express = require('express')
const Budget = require('./models/budget')
const app = require('liquid-express-views')(express())
const port = 3000

let bankAccount = 0
const addExpenses = (arr) => {
    bankAccount = 0
    arr.forEach(item => {
        bankAccount += Number(item.amount)
    })
    if (bankAccount < 0){
        
    }
    return bankAccount
}

app.listen(port, () => {
    console.log('Listening on Budget Deliverable')
})


app.use((req, res, next) => {
    console.log('I run for all routes')
    next()
})
app.use(express.urlencoded( { extended: false }))
app.use(express.static('public'))



app.post('/budgets', (req, res) => {
    Budget.push(req.body)
    addExpenses(Budget)
    res.redirect('/budgets')
})

app.get('/budgets', (req, res) => {
    addExpenses(Budget)
    res.render('index', {
        budget: Budget,
        bankAccount: bankAccount
    })
})

app.get('/budgets/new', (req, res) => {
    res.render('new')
})

app.get('/budgets/:index', (req, res) => {
    res.render('show', {
        expense: Budget[req.params.index]
    })
})