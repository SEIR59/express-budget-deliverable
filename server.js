const express = require('express')

const app = require('liquid-express-views')(express())

const Budget = require('./models/budget.js')
const budget = require('./models/budget.js')
let bankAccount = 0
const budgeting = Budget.forEach(i => {
    return bankAccount += Number(i.amount)
})



app.use(express.urlencoded({extended: false}))

app.use(express.static('public'))

app.get('/budget', (req ,res) => {
    budgeting
    res.render(
        'index',
        {
            allBudget: budget, bankAccount: bankAccount 
        },
    )
})

app.post('/budget', (req, res) => {
    console.log(req.body)
    budget.push(req.body)
    
    budgeting
    
    console.log(bankAccount)
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
        },
        
    )
})


app.listen(4000, () => {
    console.log('listen to port 4000')
})