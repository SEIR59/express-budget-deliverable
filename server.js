const express = require('express')

const app = require('liquid-express-views')(express())

const Budget = require('./models/budget.js')
const budget = require('./models/budget.js')
let bankAccount = 0




app.use(express.urlencoded({extended: false}))

app.use(express.static('public'))

app.get('/budget', (req ,res) => {
    res.render(
        'index',
        {
            allBudget: budget
        },
        bankAccount -= bankAccount
    )
})

app.post('/budget', (req, res) => {
    console.log(req.body)
    Budget.push(req.body)
    budget.forEach(i => {
        return Number(bankAccount += Number(i.amount))
    })
    
    console.log(bankAccount)
    res.redirect('/budget')
    bankAccount = null
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