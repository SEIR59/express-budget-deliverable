// Global variables
const express = require('express')
const app = require('liquid-express-views')(express())
const port = 3000
const budget = require('./models/budget')
let bankAccount;

// Middleware
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.use(express.urlencoded({ extended: false }));


// Routes
app.get('/budget', (req, res) => {
    bankAccount = 
    {
        amount: 0,
        color: 'black'
    }
    for (let i = 0; i < budget.length; i++) {
        bankAccount.amount += parseInt(budget[i].amount)
        console.log('account balance is now: ' + bankAccount.amount)
    }
    if (bankAccount.amount < 0) {
        bankAccount.color = 'red'
    }
    res.render('index',
        {
            allBudgetItems: budget,
            balance: bankAccount
        })
})

app.post('/budget', (req, res) => {
    budget.push(req.body)
    res.redirect('/budget')
})

app.get('/budget/new', (req, res) => {
    res.render('new')
})

app.get('/budget/:index', (req, res) => {
    res.render('show',
        {
            budgetItem: budget[req.params.index]
        })
})



// Listen
app.listen(port, () => {
    console.log('listening on port: ' + port)
})

// express.static()